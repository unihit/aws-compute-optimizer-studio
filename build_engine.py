import os, json
os.chdir(os.path.dirname(os.path.abspath(__file__)))
from backend.mock_data import get_sample_dataset
from backend.collector import normalize_dataset, generate_cloudshell_script

raw = get_sample_dataset()
state = normalize_dataset(raw)
cs_script = generate_cloudshell_script('auto')

header = f"""// AWS Compute Optimizer FinOps Studio - Client-Side Standalone Engine
// Auto-generated for zero-server / GitHub Pages deployment.
(function(window) {{
  'use strict';

  window.STUDIO_DEMO_RAW = {json.dumps(raw, ensure_ascii=False)};
  window.STUDIO_DEMO_STATE = {json.dumps(state, ensure_ascii=False)};
  window.CLOUDSHELL_SCRIPT = {json.dumps(cs_script, ensure_ascii=False)};
"""

body = r"""
  const REGIONAL_PRICING_TABLE = {
    'ap-northeast-2': { regionLabel: '서울 (ap-northeast-2)', natHourlyUsd: 0.059, natPerGbUsd: 0.059, natMonthlyFixedUsd: 43.07, albHourlyUsd: 0.0243, albMonthlyFixedUsd: 21.39, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03 },
    'ap-south-1': { regionLabel: '뭄바이 (ap-south-1)', natHourlyUsd: 0.056, natPerGbUsd: 0.056, natMonthlyFixedUsd: 40.88, albHourlyUsd: 0.0225, albMonthlyFixedUsd: 20.08, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03 },
    'us-east-1': { regionLabel: '미국 버지니아 (us-east-1)', natHourlyUsd: 0.045, natPerGbUsd: 0.045, natMonthlyFixedUsd: 32.85, albHourlyUsd: 0.0225, albMonthlyFixedUsd: 20.08, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03 },
    'us-west-2': { regionLabel: '미국 오레곤 (us-west-2)', natHourlyUsd: 0.045, natPerGbUsd: 0.045, natMonthlyFixedUsd: 32.85, albHourlyUsd: 0.0225, albMonthlyFixedUsd: 20.08, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03 },
    'ap-northeast-1': { regionLabel: '도쿄 (ap-northeast-1)', natHourlyUsd: 0.062, natPerGbUsd: 0.062, natMonthlyFixedUsd: 45.26, albHourlyUsd: 0.0243, albMonthlyFixedUsd: 21.39, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03 }
  };

  function getRegionalPricing(region) {
    return REGIONAL_PRICING_TABLE[region] || {
      regionLabel: region || 'Global / Default',
      natHourlyUsd: 0.059, natPerGbUsd: 0.059, natMonthlyFixedUsd: 43.07,
      albHourlyUsd: 0.0243, albMonthlyFixedUsd: 21.39,
      eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65,
      ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03
    };
  }

  function extractTag(tags, key, fallback = '-') {
    if (!Array.isArray(tags)) return fallback;
    for (const t of tags) {
      if ((t.key === key || t.Key === key) && t.value !== undefined) return t.value || t.Value || fallback;
      if ((t.Key === key || t.key === key) && t.Value !== undefined) return t.Value || fallback;
    }
    return fallback;
  }

  function formatTags(tags) {
    if (!Array.isArray(tags)) return {};
    const out = {};
    for (const t of tags) {
      const k = t.key || t.Key;
      const v = t.value || t.Value;
      if (k) out[k] = v || '';
    }
    return out;
  }

  function extractMetric(metrics, name) {
    if (!Array.isArray(metrics)) return null;
    for (const m of metrics) {
      if ((m.name || '').toUpperCase() === name.toUpperCase()) {
        const v = m.value ?? m.statistic;
        return typeof v === 'number' ? Math.round(v * 10) / 10 : v;
      }
    }
    return null;
  }

  function normalizeFinding(f) {
    if (!f) return 'Optimized';
    const s = String(f).trim();
    if (s.toLowerCase() === 'optimized') return 'Optimized';
    if (s.toLowerCase() === 'overprovisioned') return 'Overprovisioned';
    if (s.toLowerCase() === 'underprovisioned') return 'Underprovisioned';
    if (s.toLowerCase() === 'notoptimized') return 'NotOptimized';
    return s;
  }

  function isGraviton(instanceType, platformDiffs = []) {
    if (platformDiffs && platformDiffs.includes('Architecture')) return true;
    const fam = (instanceType || '').split('.')[0].toLowerCase();
    return fam.endsWith('g') || fam.endsWith('gd') || fam.endsWith('gn');
  }

  function normalizeDataset(raw, allowEc2Graviton = true, excludeOptimized = false) {
    if (!raw) return window.STUDIO_DEMO_STATE;

    const meta = raw.metadata || {};
    const accountId = meta.accountId || 'Unknown';
    const region = meta.region || 'ap-northeast-2';
    const regPricing = raw.regionalPricing || getRegionalPricing(region);

    const ec2List = raw.ec2 || raw.instanceRecommendations || [];
    const ebsList = raw.ebs || raw.volumeRecommendations || [];
    const rdsList = raw.rds || raw.rdsDBRecommendations || [];
    const ecsList = raw.ecs || raw.ecsServiceRecommendations || [];
    const lambdaList = raw.lambda || raw.lambdaFunctionRecommendations || [];
    const idleList = raw.idle || raw.idleRecommendations || [];

    let items = [];

    // 1. EC2
    for (const rec of ec2List) {
      const arn = rec.instanceArn || '';
      const resId = arn.includes('/') ? arn.split('/').pop() : arn;
      const tags = rec.tags || [];
      const name = rec.instanceName || extractTag(tags, 'Name', resId);
      const currentCfg = rec.currentInstanceType || '-';
      const finding = normalizeFinding(rec.finding || 'Optimized');
      const reasons = rec.findingReasonCodes || [];
      const curIsGraviton = isGraviton(currentCfg, []);

      const allOptions = rec.recommendationOptions || [];
      const filteredOptions = (allowEc2Graviton || curIsGraviton)
        ? allOptions
        : allOptions.filter(o => !isGraviton(o.instanceType || '', o.platformDifferences || []));

      const bestOpt = filteredOptions[0] || {};
      const recCfg = bestOpt.instanceType || currentCfg;
      const platformDiffs = bestOpt.platformDifferences || [];
      const isGravitonRec = (!curIsGraviton) && isGraviton(recCfg, platformDiffs) && (recCfg !== currentCfg);

      const savObj = bestOpt.savingsOpportunity || {};
      let monthlySav = parseFloat((savObj.estimatedMonthlySavings || {}).value || 0.0);
      let savPct = parseFloat(savObj.savingsOpportunityPercentage || 0.0);
      if (finding === 'Optimized' || recCfg === currentCfg) {
        monthlySav = 0.0;
        savPct = 0.0;
      }

      const cpuMax = extractMetric(rec.utilizationMetrics, 'CPU');
      const memMax = extractMetric(rec.utilizationMetrics, 'MEMORY');
      const projCpu = extractMetric(bestOpt.projectedUtilizationMetrics, 'CPU');
      const projMem = extractMetric(bestOpt.projectedUtilizationMetrics, 'MEMORY');

      const compWarn = isGravitonRec
        ? '⚠️ Graviton(ARM64) 전환 주의: OS 이미지(AMI), 네이티브 바이너리 및 컨테이너 런타임의 ARM64 호환성 사전 검증이 필수입니다.'
        : null;

      let altOpt = (filteredOptions.length > 1) ? filteredOptions[1].instanceType : null;
      if (altOpt === recCfg || finding === 'Optimized') altOpt = null;

      let guidance = '✅ 현재 스펙 적정 상태 (추가 리사이징 불필요)';
      if (finding === 'Overprovisioned' && recCfg !== currentCfg) {
        guidance = `${currentCfg} → ${recCfg} 리사이징 권고 (${isGravitonRec ? 'Graviton ARM64 전환 — 호환성 검증 필요' : '동일 아키텍처 내 세대 변경/축소 — 즉시 적용 가능'})`;
      } else if (finding === 'Underprovisioned') {
        guidance = `성능 병목 위험(CPU ${cpuMax || 0}% / Mem ${memMax || 0}%): ${recCfg}로 스케일업 권고`;
      }

      items.push({
        id: resId, arn, name, category: 'EC2', serviceLabel: 'Amazon EC2',
        accountId: rec.accountId || accountId,
        environment: extractTag(tags, 'Environment', 'Production'),
        owner: extractTag(tags, 'Owner', '-'),
        serviceTag: extractTag(tags, 'Service', '-'),
        finding, reasonCodes: reasons, currentConfig: currentCfg, recommendedConfig: recCfg,
        alternativeConfig: altOpt, isGravitonRecommendation: isGravitonRec,
        compatibilityWarning: compWarn,
        migrationEffort: bestOpt.migrationEffort || (isGravitonRec ? 'Medium' : 'VeryLow'),
        performanceRisk: rec.currentPerformanceRisk || 'Low',
        platformDifferences: platformDiffs,
        utilizationSummary: `CPU Max ${cpuMax || 0}% / Mem Max ${memMax || 0}%`,
        projectedSummary: (projCpu && finding !== 'Optimized') ? `CPU ${projCpu}% / Mem ${projMem || '-'}%` : '현재 적정 사양 유지',
        cpuMax, memoryMax: memMax,
        monthlySavingsUsd: Math.round(monthlySav * 100) / 100,
        annualSavingsUsd: Math.round(monthlySav * 12 * 100) / 100,
        savingsPercentage: Math.round(savPct * 10) / 10,
        actionGuidance: guidance,
        tags: formatTags(tags)
      });
    }

    // 2. EBS
    for (const rec of ebsList) {
      const arn = rec.volumeArn || '';
      const resId = arn.includes('/') ? arn.split('/').pop() : arn;
      const tags = rec.tags || [];
      const name = extractTag(tags, 'Name', resId);
      const cur = rec.currentConfiguration || {};
      const curStr = `${cur.volumeType || 'gp2'} (${cur.volumeSize || 0}GB, ${cur.volumeBaselineIOPS || 0} IOPS)`;

      const opts = rec.volumeRecommendationOptions || [];
      const best = opts[0] || {};
      const optCfg = best.configuration || {};
      const recStr = optCfg.volumeType ? `${optCfg.volumeType} (${optCfg.volumeSize || 0}GB, ${optCfg.volumeBaselineIOPS || 0} IOPS)` : curStr;

      const savObj = best.savingsOpportunity || {};
      let monthlySav = parseFloat((savObj.estimatedMonthlySavings || {}).value || 0.0);
      let savPct = parseFloat(savObj.savingsOpportunityPercentage || 0.0);
      const findingEbs = normalizeFinding(rec.finding || 'NotOptimized');
      if (findingEbs === 'Optimized' || recStr === curStr) {
        monthlySav = 0.0;
        savPct = 0.0;
      }

      const rOps = extractMetric(rec.utilizationMetrics, 'VolumeReadOps');
      const wOps = extractMetric(rec.utilizationMetrics, 'VolumeWriteOps');

      items.push({
        id: resId, arn, name, category: 'EBS', serviceLabel: 'Amazon EBS',
        accountId: rec.accountId || accountId,
        environment: extractTag(tags, 'Environment', 'Production'),
        owner: extractTag(tags, 'Owner', '-'),
        serviceTag: extractTag(tags, 'Service', 'Storage'),
        finding: findingEbs, reasonCodes: ['EBSVolumeTypeOptimization'],
        currentConfig: curStr, recommendedConfig: recStr, alternativeConfig: null,
        migrationEffort: 'VeryLow', performanceRisk: rec.currentPerformanceRisk || 'VeryLow',
        platformDifferences: [],
        utilizationSummary: `Read ${rOps || 0} IOPS / Write ${wOps || 0} IOPS`,
        projectedSummary: (findingEbs === 'Optimized') ? '현재 적정 볼륨 유지' : 'gp3 전환 (무중단 ModifyVolume 가능)',
        cpuMax: null, memoryMax: null,
        monthlySavingsUsd: Math.round(monthlySav * 100) / 100,
        annualSavingsUsd: Math.round(monthlySav * 12 * 100) / 100,
        savingsPercentage: Math.round(savPct * 10) / 10,
        actionGuidance: (findingEbs === 'Optimized') ? '✅ 현재 볼륨 스펙 적정 상태 유지' : `AWS ModifyVolume API로 무중단 ${cur.volumeType} → ${optCfg.volumeType || 'gp3'} 볼륨 전환`,
        tags: formatTags(tags)
      });
    }

    // 3. RDS
    for (const rec of rdsList) {
      const arn = rec.resourceArn || '';
      const resId = arn.includes(':') ? arn.split(':').pop() : arn;
      const tags = rec.tags || [];
      const engine = `${rec.engine || 'rds'} ${rec.engineVersion || ''}`.trim();
      const curCls = rec.currentDBInstanceClass || '-';
      const curStg = rec.currentStorageConfiguration || {};
      let curStr = `${curCls} (${engine})`;
      if (curStg.storageType) curStr += ` + ${curStg.storageType} ${curStg.allocatedStorage}GB`;

      const instOpts = rec.instanceRecommendationOptions || [];
      const stgOpts = rec.storageRecommendationOptions || [];
      const bestInst = instOpts[0] || {};
      const bestStg = stgOpts[0] || {};

      const recCls = bestInst.dbInstanceClass || curCls;
      let recStr = `${recCls} (${engine})`;
      if (bestStg.storageConfiguration) {
        const sc = bestStg.storageConfiguration;
        recStr += ` + ${sc.storageType} ${sc.allocatedStorage}GB`;
      }

      const instSav = parseFloat((bestInst.savingsOpportunity || {}).estimatedMonthlySavings?.value || 0.0);
      const stgSav = parseFloat((bestStg.savingsOpportunity || {}).estimatedMonthlySavings?.value || 0.0);
      let monthlySav = instSav + stgSav;
      let instPct = parseFloat((bestInst.savingsOpportunity || {}).savingsOpportunityPercentage || 0.0);

      const cpuMax = extractMetric(rec.utilizationMetrics, 'CPU');
      const memMax = extractMetric(rec.utilizationMetrics, 'Memory');
      const finding = normalizeFinding(rec.instanceFinding || rec.storageFinding || 'Optimized');
      const reasons = (rec.instanceFindingReasonCodes || []).concat(rec.storageFindingReasonCodes || []);

      const hasNewEngine = reasons.includes('NewEngineVersionAvailable');
      const hasNewGenCls = reasons.includes('NewGenerationDBInstanceClassAvailable') && recCls !== curCls;

      if (finding === 'Optimized' && monthlySav <= 0) {
        monthlySav = 0.0;
        instPct = 0.0;
        if (hasNewEngine) recStr = `${recCls} (${engine} → 최신 엔진 버전 업데이트 권고)`;
        else if (hasNewGenCls) recStr = `${recCls} (최신 세대 클래스 전환 가능 · 동일 요금 고성능)`;
      }

      let projTxt = `Instance $${Math.round(instSav)} + Storage $${Math.round(stgSav)} 절감`;
      let guideTxt = `정기 점검 윈도우에 ${curCls} → ${recCls} 클래스 변경 및 스토리지 gp3 전환 권고`;
      if (finding === 'Optimized' && monthlySav <= 0) {
        if (hasNewEngine) {
          projTxt = 'AWS Compute Optimizer 감지: 신규 DB 엔진 버전 업데이트 가능';
          guideTxt = `현재 스펙(${curCls})은 적정이나 신규 DB 엔진 버전이 출시되어 정기 점검 시 엔진 업데이트 권장`;
        } else if (hasNewGenCls) {
          projTxt = `신규 세대 인스턴스(${curCls} → ${recCls}) 전환으로 가격 대비 성능 향상 가능`;
          guideTxt = `현재 스펙 적정 유지 가능 (선택 사항: 차세대 ${recCls} 클래스로 업그레이드 가능)`;
        } else {
          projTxt = '현재 적정 DB 스펙 유지';
          guideTxt = '✅ 현재 DB 인스턴스/클러스터 스펙 적정 상태 유지';
        }
      }

      items.push({
        id: resId, arn, name: resId, category: 'RDS', serviceLabel: 'Amazon RDS / Aurora',
        accountId: rec.accountId || accountId,
        environment: extractTag(tags, 'Environment', 'Production'),
        owner: extractTag(tags, 'Owner', '-'),
        serviceTag: extractTag(tags, 'Service', 'Database'),
        finding, reasonCodes: reasons, currentConfig: curStr, recommendedConfig: recStr,
        alternativeConfig: null, migrationEffort: 'Low', performanceRisk: 'Low',
        platformDifferences: (recCls.includes('g.') && !curCls.includes('g.')) ? ['GravitonDB'] : [],
        utilizationSummary: `CPU Max ${cpuMax || 0}% / FreeableMem ${memMax || 0}%`,
        projectedSummary: projTxt,
        cpuMax, memoryMax: memMax,
        monthlySavingsUsd: Math.round(monthlySav * 100) / 100,
        annualSavingsUsd: Math.round(monthlySav * 12 * 100) / 100,
        savingsPercentage: Math.round(instPct * 10) / 10,
        actionGuidance: guideTxt,
        tags: formatTags(tags)
      });
    }

    // 4. ECS
    for (const rec of ecsList) {
      const arn = rec.serviceArn || '';
      const resId = arn.includes('/') ? arn.split('/').pop() : arn;
      const tags = rec.tags || [];
      const cur = rec.currentServiceConfiguration || {};
      const curStr = `${cur.cpu || 0} CPU / ${cur.memory || 0} MB`;

      const opts = rec.serviceRecommendationOptions || [];
      const best = opts[0] || {};
      const recStr = `${best.cpu || cur.cpu || 0} CPU / ${best.memory || cur.memory || 0} MB`;

      const savObj = best.SavingsOpportunity || best.savingsOpportunity || {};
      let monthlySav = parseFloat((savObj.estimatedMonthlySavings || {}).value || 0.0);
      let savPct = parseFloat(savObj.savingsOpportunityPercentage || 0.0);
      const findingEcs = normalizeFinding(rec.finding || 'Overprovisioned');
      if (findingEcs === 'Optimized' || recStr === curStr) {
        monthlySav = 0.0;
        savPct = 0.0;
      }

      const cpuMax = extractMetric(rec.utilizationMetrics, 'CPU');
      const memMax = extractMetric(rec.utilizationMetrics, 'Memory');

      items.push({
        id: resId, arn, name: resId, category: 'ECS', serviceLabel: 'Amazon ECS (Fargate)',
        accountId: rec.accountId || accountId,
        environment: extractTag(tags, 'Environment', 'Production'),
        owner: extractTag(tags, 'Owner', '-'),
        serviceTag: extractTag(tags, 'Service', 'Container'),
        finding: findingEcs, reasonCodes: rec.findingReasonCodes || [],
        currentConfig: curStr, recommendedConfig: recStr, alternativeConfig: null,
        migrationEffort: 'VeryLow', performanceRisk: 'VeryLow',
        platformDifferences: [],
        utilizationSummary: `CPU Max ${cpuMax || 0}% / Mem Max ${memMax || 0}%`,
        projectedSummary: (findingEcs === 'Optimized') ? '현재 적정 사양 유지' : 'Task Definition 리비전 업데이트',
        cpuMax, memoryMax: memMax,
        monthlySavingsUsd: Math.round(monthlySav * 100) / 100,
        annualSavingsUsd: Math.round(monthlySav * 12 * 100) / 100,
        savingsPercentage: Math.round(savPct * 10) / 10,
        actionGuidance: (findingEcs === 'Optimized') ? '✅ 현재 Task 스펙 적정 상태 유지' : `ECS Task Definition 스펙을 ${recStr}로 조정 후 롤링 배포`,
        tags: formatTags(tags)
      });
    }

    // 5. Lambda
    for (const rec of lambdaList) {
      const arn = rec.functionArn || '';
      const resId = arn.includes(':function:') ? arn.split(':function:').pop() : arn;
      const tags = rec.tags || [];
      const cur = rec.currentConfiguration || {};
      const curMem = rec.currentMemorySize || cur.memorySize || 0;
      const curTimeout = cur.timeout;
      const curStr = curTimeout ? `${curMem} MB (Timeout ${curTimeout}s)` : `${curMem} MB`;

      const opts = rec.memorySizeRecommendationOptions || [];
      const best = opts[0] || {};
      const recMem = best.memorySize || curMem;
      const recStr = `${recMem} MB`;

      const savObj = best.savingsOpportunity || {};
      let monthlySav = parseFloat((savObj.estimatedMonthlySavings || {}).value || 0.0);
      let savPct = parseFloat(savObj.savingsOpportunityPercentage || 0.0);
      const findingLam = normalizeFinding(rec.finding || 'NotOptimized');
      if (findingLam === 'Optimized') {
        monthlySav = 0.0;
        savPct = 0.0;
      }

      const durAvg = extractMetric(rec.utilizationMetrics, 'Duration');
      const memMax = extractMetric(rec.utilizationMetrics, 'Memory');

      let lamGuide = `✅ 현재 Lambda 메모리 설정(${curMem}MB) 적정 유지`;
      if (findingLam !== 'Optimized' && recMem !== curMem) {
        lamGuide = (Number(recMem) < Number(curMem))
          ? `Lambda 메모리 설정을 ${curMem}MB → ${recMem}MB로 하향 조정`
          : `Lambda 메모리 설정을 ${curMem}MB → ${recMem}MB로 상향 조정 (실행 시간 단축)`;
      }

      items.push({
        id: resId, arn, name: resId.replace(':$LATEST', ''), category: 'Lambda', serviceLabel: 'AWS Lambda',
        accountId: rec.accountId || accountId,
        environment: extractTag(tags, 'Environment', 'Production'),
        owner: extractTag(tags, 'Owner', '-'),
        serviceTag: extractTag(tags, 'Service', 'Serverless'),
        finding: findingLam, reasonCodes: rec.findingReasonCodes || [],
        currentConfig: curStr, recommendedConfig: recStr, alternativeConfig: null,
        migrationEffort: 'VeryLow', performanceRisk: 'VeryLow',
        platformDifferences: [],
        utilizationSummary: `Max Mem ${memMax || 0} MB / Avg Duration ${durAvg || 0} ms`,
        projectedSummary: `최근 14일 호출 ${rec.numberOfInvocations || 0}회 기준`,
        cpuMax: null, memoryMax: memMax,
        monthlySavingsUsd: Math.round(monthlySav * 100) / 100,
        annualSavingsUsd: Math.round(monthlySav * 12 * 100) / 100,
        savingsPercentage: Math.round(savPct * 10) / 10,
        actionGuidance: lamGuide,
        tags: formatTags(tags)
      });
    }

    // 6. Idle
    for (const rec of idleList) {
      const arn = rec.resourceArn || '';
      const resId = rec.resourceId || (arn.includes('/') ? arn.split('/').pop() : arn);
      const tags = rec.tags || [];
      const name = extractTag(tags, 'Name', resId);
      const rtype = rec.resourceType || 'IdleResource';
      const finding = rec.finding || 'Idle';

      const savObj = rec.savingsOpportunity || {};
      const monthlySav = parseFloat((savObj.estimatedMonthlySavings || {}).value || 0.0);
      const savPct = parseFloat(savObj.savingsOpportunityPercentage || 100.0);

      items.push({
        id: resId, arn, name, category: 'Idle', serviceLabel: `Idle (${rtype})`,
        accountId: rec.accountId || accountId,
        environment: extractTag(tags, 'Environment', 'Staging'),
        owner: extractTag(tags, 'Owner', '-'),
        serviceTag: extractTag(tags, 'Service', 'Unused'),
        finding, reasonCodes: [finding, rtype],
        currentConfig: `${rtype} (Active Billing)`,
        recommendedConfig: 'Stop / Snapshot 후 Terminate',
        alternativeConfig: null, migrationEffort: 'VeryLow', performanceRisk: 'VeryLow',
        platformDifferences: [],
        utilizationSummary: rec.findingDescription || '14일간 활성 트래픽/연결 없음',
        projectedSummary: '즉시 비용 100% 제거 가능',
        cpuMax: extractMetric(rec.utilizationMetrics, 'CPU'), memoryMax: null,
        monthlySavingsUsd: Math.round(monthlySav * 100) / 100,
        annualSavingsUsd: Math.round(monthlySav * 12 * 100) / 100,
        savingsPercentage: Math.round(savPct * 10) / 10,
        actionGuidance: `유휴 리소스(${rtype}): 최종 스냅샷/백업 생성 후 중지 또는 삭제 권고`,
        tags: formatTags(tags)
      });
    }

    // 7. Extended Support (EKS & RDS)
    const extList = Array.from(raw.extendedSupport || []);
    const existingEks = new Set(extList.filter(r => r.serviceType === 'EKS').map(r => r.resourceName || r.resourceId));

    const discoveredK8s = [];
    for (const list of [raw.ebs || [], raw.ec2 || []]) {
      for (const resObj of list) {
        for (const t of (resObj.tags || [])) {
          const tk = String(t.key || t.Key || '');
          const tv = String(t.value || t.Value || '');
          if (tk === 'KubernetesCluster' && tv && !discoveredK8s.includes(tv)) discoveredK8s.push(tv);
          else if (tk.startsWith('kubernetes.io/cluster/') && tk.split('/').pop()) {
            const cn = tk.split('/').pop();
            if (!discoveredK8s.includes(cn)) discoveredK8s.push(cn);
          }
        }
      }
    }

    for (const cn of discoveredK8s) {
      if (!existingEks.has(cn)) {
        extList.push({
          resourceArn: `arn:aws:eks:${region}:${accountId}:cluster/${cn}`,
          resourceId: `eks-cluster/${cn}`,
          resourceName: cn,
          serviceType: 'EKS',
          engineOrPlatform: 'Amazon EKS Kubernetes',
          currentVersion: '1.31',
          recommendedVersion: 'EKS v1.32 / v1.33+ 최신 버전',
          finding: 'ExtendedSupport',
          statusDetail: 'EKS Kubernetes v1.31 사용 중 (표준 지원 종료 · Extended Support 시간당 $0.50 추가 과금 대상)',
          monthlySurchargeUsd: 365.00,
          savingsPercentage: 83.3,
          environment: 'Production',
          owner: 'Platform / DevOps',
          actionGuidance: `EKS 클러스터(${cn})를 최신 Kubernetes 버전(v1.32/v1.33+)으로 인플레이스 업데이트하여 Extended Support 추가 과금(월 $365) 제거 및 최신 보안 패치 유지`
        });
      }
    }

    for (const rec of extList) {
      const resId = rec.resourceId || '';
      const name = rec.resourceName || resId;
      const stype = rec.serviceType || 'EKS';
      const curVer = rec.currentVersion || '-';
      const recVer = rec.recommendedVersion || 'Latest Standard';
      const engineLabel = rec.engineOrPlatform || stype;
      const monthlySav = parseFloat(rec.monthlySurchargeUsd || 0.0);
      const savPct = parseFloat(rec.savingsPercentage || 100.0);

      items.push({
        id: resId, arn: rec.resourceArn || resId, name, category: 'ExtendedSupport',
        serviceLabel: `Extended Support (${stype})`,
        accountId, environment: rec.environment || 'Production', owner: rec.owner || '-',
        serviceTag: stype, finding: 'ExtendedSupport', reasonCodes: ['VersionEndOfStandardSupport'],
        currentConfig: `${engineLabel} (v${curVer})`,
        recommendedConfig: `${recVer} 업데이트`,
        alternativeConfig: null, isGravitonRecommendation: false, compatibilityWarning: null,
        migrationEffort: 'Medium', performanceRisk: 'Low', platformDifferences: [],
        utilizationSummary: rec.statusDetail || '표준 지원 종료로 인한 Extended Support 추가 과금 발생 중',
        projectedSummary: `최신 버전 업데이트 시 추가 과금 월 $${monthlySav.toFixed(2)} 즉시 제거`,
        cpuMax: null, memoryMax: null,
        monthlySavingsUsd: Math.round(monthlySav * 100) / 100,
        annualSavingsUsd: Math.round(monthlySav * 12 * 100) / 100,
        savingsPercentage: Math.round(savPct * 10) / 10,
        actionGuidance: rec.actionGuidance || `${curVer} → ${recVer} 버전 업데이트로 Extended Support 요금 제거`,
        tags: {}
      });
    }

    // 8. Network Audit
    const netAudit = raw.networkAudit || {};
    const netSummary = netAudit.summary || {
      totalEipCount: 0, unattachedEipCount: 0, totalAlbCount: 0, idleOrNoTargetAlbCount: 0,
      totalNatGwCount: 0, idleOrRedundantNatGwCount: 0, missingS3EndpointVpcCount: 0
    };
    const regLabel = regPricing.regionLabel || region;
    const natHr = regPricing.natHourlyUsd || 0.059;
    const natGb = regPricing.natPerGbUsd || 0.059;
    const natMo = regPricing.natMonthlyFixedUsd || 43.07;
    const albHr = regPricing.albHourlyUsd || 0.0243;
    const albMo = regPricing.albMonthlyFixedUsd || 21.39;
    const eipHr = regPricing.eipHourlyUsd || 0.005;
    const eipMo = regPricing.eipMonthlyUsd || 3.65;

    for (const rec of (netAudit.items || [])) {
      const resId = rec.resourceId || '';
      const name = rec.resourceName || resId;
      const subType = rec.subType || 'Network';
      let finding = normalizeFinding(rec.finding || 'Unattached');
      let monthlySav = parseFloat(rec.monthlySavingsUsd || 0.0);
      let utilStr = rec.utilizationDetail || '-';
      let projStr = '-';

      if (subType === 'UnusedEIP') {
        monthlySav = eipMo;
        utilStr = `연결된 인스턴스/ENI 없음 — ${regLabel} 단가($${eipHr}/hr × 730h = $${eipMo}/월) 유휴 과금 중`;
        projStr = `전체 EIP ${netSummary.totalEipCount || 0}개 중 미사용 ${netSummary.unattachedEipCount || 0}개`;
      } else if (subType === 'IdleALB') {
        monthlySav = albMo;
        utilStr = `전체 ALB ${netSummary.totalAlbCount || 0}개 중 활성 타겟 0개 — ${regLabel} 단가(($${albHr}+$${eipHr})/hr × 730h = $${albMo}/월)`;
        projStr = `전체 ALB ${netSummary.totalAlbCount || 0}개 중 최적화 대상 ${netSummary.idleOrNoTargetAlbCount || 0}개`;
      } else if (subType === 'IdleNATGW') {
        if (finding === 'Overprovisioned' || finding === 'NotOptimized') finding = 'NotOptimized';
        monthlySav = natMo;
        utilStr = (finding === 'NotOptimized')
          ? `전체 NAT GW ${netSummary.totalNatGwCount || 0}개 점검: ${regLabel} 기준 단가($${natHr}/hr · $${natGb}/GB × 730 = $${natMo}/월)`
          : `14일간 트래픽 0 Byte 유휴 NAT GW: ${regLabel} 고정비($${natHr}/hr × 730h = $${natMo}/월)`;
        projStr = `${regLabel} 리전 산식 적용 ($${natGb}/GB · $${natHr}/hr × 730 = $${natMo}/월)`;
      }

      items.push({
        id: resId, arn: resId, name, category: 'Network', serviceLabel: 'EIP / ALB / NAT 점검',
        accountId, environment: rec.environment || 'Production', owner: rec.owner || '-',
        serviceTag: subType, finding, reasonCodes: [subType],
        currentConfig: rec.currentConfig || '-',
        recommendedConfig: rec.recommendedConfig || '무료 S3/DynamoDB Gateway VPC Endpoint 생성 및 비운영 NAT 통합',
        alternativeConfig: null, isGravitonRecommendation: false, compatibilityWarning: null,
        migrationEffort: (subType === 'UnusedEIP' || finding === 'NotOptimized') ? 'VeryLow' : 'Low',
        performanceRisk: 'VeryLow', platformDifferences: [],
        utilizationSummary: utilStr, projectedSummary: projStr,
        cpuMax: null, memoryMax: null,
        monthlySavingsUsd: Math.round(monthlySav * 100) / 100,
        annualSavingsUsd: Math.round(monthlySav * 12 * 100) / 100,
        savingsPercentage: (finding === 'Unattached' || finding === 'Idle') ? 100.0 : 75.0,
        actionGuidance: (subType === 'IdleNATGW')
          ? `[${regLabel}] 무료 S3/DynamoDB Gateway VPC Endpoint 생성($${natGb}/GB 우회) 및 비운영 NAT 통합($${natHr}/hr × 730h = $${natMo}/월)`
          : (rec.actionGuidance || '미사용 네트워크 리소스 정리'),
        tags: {}
      });
    }

    // 9. Storage & Log Lifecycle Audit
    const stgAudit = raw.storageLifecycleAudit || {};
    const stgSummary = stgAudit.summary || {
      agedEbsSnapshotCount: 0, agedEbsSnapshotTotalGb: 0, agedRdsSnapshotCount: 0, agedRdsSnapshotTotalGb: 0,
      neverExpireLogGroupCount: 0, neverExpireLogTotalGb: 0, s3NoLifecycleBucketCount: 0
    };
    const ebsSnapRate = regPricing.ebsSnapPerGbUsd || 0.05;
    const cwLogRate = regPricing.cwLogsPerGbUsd || 0.03;

    for (const rec of (stgAudit.items || [])) {
      const resId = rec.resourceId || '';
      const name = rec.resourceName || resId;
      const subType = rec.subType || 'StorageLifecycle';
      const finding = rec.finding || 'NotOptimized';
      let monthlySav = parseFloat(rec.monthlySavingsUsd || 0.0);
      const savPct = parseFloat(rec.savingsPercentage || 100.0);
      let utilDetail = rec.utilizationDetail || '-';

      if (subType === 'AgedEBSSnapshot' && (stgSummary.agedEbsSnapshotTotalGb || 0) > 0) {
        const totGb = stgSummary.agedEbsSnapshotTotalGb;
        monthlySav = Math.round(totGb * ebsSnapRate * 100) / 100;
        utilDetail = `90일+ 장기 방치 스냅샷 (${totGb} GB × ${regLabel} 단가 $${ebsSnapRate}/GB-월 = $${monthlySav.toFixed(2)}/월)`;
      } else if (subType === 'CloudWatchLogsNoRetention' && (stgSummary.neverExpireLogTotalGb || 0) > 0) {
        const totLogGb = stgSummary.neverExpireLogTotalGb;
        monthlySav = Math.round(Math.max(totLogGb * cwLogRate, 5.0) * 100) / 100;
        utilDetail = `만료 미설정 로그 (${totLogGb} GB × ${regLabel} 단가 $${cwLogRate}/GB-월)`;
      }

      items.push({
        id: resId, arn: resId, name, category: 'StorageLifecycle', serviceLabel: '스냅샷 / 로그 / S3 수명주기',
        accountId, environment: rec.environment || 'Production', owner: rec.owner || '-',
        serviceTag: subType, finding, reasonCodes: [subType],
        currentConfig: rec.currentConfig || '-',
        recommendedConfig: rec.recommendedConfig || '수명주기(Lifecycle) 정책 적용',
        alternativeConfig: null, isGravitonRecommendation: false, compatibilityWarning: null,
        migrationEffort: 'VeryLow', performanceRisk: 'VeryLow', platformDifferences: [],
        utilizationSummary: utilDetail, projectedSummary: `${regLabel} 리전 스토리지 단가 기준 산출`,
        cpuMax: null, memoryMax: null,
        monthlySavingsUsd: Math.round(monthlySav * 100) / 100,
        annualSavingsUsd: Math.round(monthlySav * 12 * 100) / 100,
        savingsPercentage: Math.round(savPct * 10) / 10,
        actionGuidance: rec.actionGuidance || '수명주기 정책 설정 및 노후 백업 정리',
        tags: {}
      });
    }

    // Sort items by monthly savings descending
    items.sort((a, b) => (b.monthlySavingsUsd || 0) - (a.monthlySavingsUsd || 0));
    const totalAnalyzedCount = items.length;
    if (excludeOptimized) {
      items = items.filter(i => i.finding !== 'Optimized');
    }

    const totalMonthlySavings = Math.round(items.reduce((acc, i) => acc + (i.monthlySavingsUsd || 0), 0) * 100) / 100;
    const totalAnnualSavings = Math.round(totalMonthlySavings * 12 * 100) / 100;

    const rawByCategory = {};
    for (const cat of ['EC2', 'RDS', 'ExtendedSupport', 'EBS', 'Idle', 'StorageLifecycle', 'ECS', 'Lambda', 'Network']) {
      const catItems = items.filter(i => i.category === cat);
      const catMonthly = Math.round(catItems.reduce((acc, i) => acc + (i.monthlySavingsUsd || 0), 0) * 100) / 100;
      rawByCategory[cat] = {
        category: cat,
        count: catItems.length,
        optimizableCount: catItems.filter(i => i.monthlySavingsUsd > 0).length,
        monthlySavingsUsd: catMonthly,
        annualSavingsUsd: Math.round(catMonthly * 12 * 100) / 100
      };
    }

    const sortedCats = Object.keys(rawByCategory).sort((a, b) => {
      const ma = rawByCategory[a].monthlySavingsUsd, mb = rawByCategory[b].monthlySavingsUsd;
      if (mb !== ma) return mb - ma;
      const oa = rawByCategory[a].optimizableCount, ob = rawByCategory[b].optimizableCount;
      if (ob !== oa) return ob - oa;
      return rawByCategory[b].count - rawByCategory[a].count;
    });

    const byCategory = {};
    for (const c of sortedCats) byCategory[c] = rawByCategory[c];

    const findingCounts = {
      Overprovisioned: items.filter(i => i.finding === 'Overprovisioned').length,
      NotOptimized: items.filter(i => i.finding === 'NotOptimized').length,
      ExtendedSupport: items.filter(i => i.finding === 'ExtendedSupport').length,
      Idle: items.filter(i => i.category === 'Idle' || i.finding === 'Idle' || i.finding === 'Unattached').length,
      Underprovisioned: items.filter(i => i.finding === 'Underprovisioned').length,
      Optimized: items.filter(i => i.finding === 'Optimized').length
    };

    const quickWins = items.filter(i => i.monthlySavingsUsd > 0 && (i.migrationEffort === 'VeryLow' || i.migrationEffort === 'Low'));
    const archMigrations = items.filter(i => i.monthlySavingsUsd > 0 && i.migrationEffort !== 'VeryLow' && i.migrationEffort !== 'Low');
    const perfRisks = items.filter(i => i.finding === 'Underprovisioned' || i.performanceRisk === 'High' || i.performanceRisk === 'Medium');

    const extMonthly = (byCategory.ExtendedSupport || {}).monthlySavingsUsd || 0.0;
    const extCount = (byCategory.ExtendedSupport || {}).optimizableCount || 0;
    const stgMonthly = (byCategory.StorageLifecycle || {}).monthlySavingsUsd || 0.0;

    const ceData = raw.costExplorer || {};
    const lastMonthBill = parseFloat(ceData.lastMonthTotalUsd || 0.0);
    const savingsVsBillPct = (lastMonthBill > 0) ? Math.round((totalMonthlySavings / lastMonthBill) * 1000) / 10 : null;

    const coStatus = meta.computeOptimizerStatus || 'Active';
    const coNote = meta.computeOptimizerNote || (
      coStatus === 'Active'
        ? 'Compute Optimizer 정상 활성화됨 (최근 14일 CloudWatch 메트릭 수집 중)'
        : '⚠️ 현재 계정에 AWS Compute Optimizer가 미가입(Opt-out) 상태입니다. 콘솔 또는 CLI(`aws compute-optimizer update-enrollment-status --status Active`)로 활성화한 뒤 14일 후 재진단하면 정밀 라이트사이징 추천을 받을 수 있습니다. (현재는 기본 AWS API 기반 즉시 진단 결과만 표시됩니다.)'
    );

    const fxInfo = raw.exchangeRateInfo || {
      rate: 1384.50,
      source: 'AWS Invoice 기준환율',
      mode: 'aws_invoice',
      invoiceId: null,
      billingPeriod: null
    };

    return {
      metadata: {
        accountId,
        accountAlias: meta.accountAlias || 'aws-workload-account',
        region,
        collectedAt: meta.collectedAt || new Date().toISOString(),
        sourceMode: meta.sourceMode || 'demo',
        lookBackPeriodInDays: meta.lookBackPeriodInDays || 14,
        allowEc2Graviton,
        excludeOptimized,
        computeOptimizerStatus: coStatus,
        computeOptimizerNote: coNote
      },
      exchangeRateInfo: fxInfo,
      costExplorer: {
        lastMonthTotalUsd: lastMonthBill,
        savingsVsBillPercentage: savingsVsBillPct,
        savingsPlansCoveragePct: ceData.savingsPlansCoveragePct,
        riCoveragePct: ceData.riCoveragePct,
        billingPeriod: ceData.billingPeriod || '최근 30일 청구액 기준'
      },
      kpis: {
        totalResourcesAnalyzed: totalAnalyzedCount,
        optimizableResourcesCount: items.filter(i => i.monthlySavingsUsd > 0).length,
        performanceRiskCount: perfRisks.length,
        totalMonthlySavingsUsd: totalMonthlySavings,
        totalAnnualSavingsUsd: totalAnnualSavings,
        quickWinMonthlySavingsUsd: Math.round(quickWins.reduce((acc, i) => acc + (i.monthlySavingsUsd || 0), 0) * 100) / 100,
        extendedSupportCount: extCount,
        extendedSupportMonthlyUsd: extMonthly,
        storageLifecycleMonthlyUsd: stgMonthly,
        totalEipCount: netSummary.totalEipCount || 0,
        unattachedEipCount: netSummary.unattachedEipCount || 0,
        totalAlbCount: netSummary.totalAlbCount || 0,
        idleOrNoTargetAlbCount: netSummary.idleOrNoTargetAlbCount || 0,
        totalNatGwCount: netSummary.totalNatGwCount || 0,
        idleOrRedundantNatGwCount: netSummary.idleOrRedundantNatGwCount || 0,
        agedSnapshotCount: (stgSummary.agedEbsSnapshotCount || 0) + (stgSummary.agedRdsSnapshotCount || 0),
        agedSnapshotTotalGb: (stgSummary.agedEbsSnapshotTotalGb || 0) + (stgSummary.agedRdsSnapshotTotalGb || 0),
        neverExpireLogGroupCount: stgSummary.neverExpireLogGroupCount || 0,
        s3NoLifecycleBucketCount: stgSummary.s3NoLifecycleBucketCount || 0
      },
      networkSummary: netSummary,
      storageLifecycleSummary: stgSummary,
      byCategory,
      findingDistribution: findingCounts,
      actionPlan: {
        phase1QuickWins: quickWins.slice(0, 12),
        phase2ArchModernization: archMigrations.slice(0, 12),
        phase3PerformanceStabilization: perfRisks.slice(0, 10)
      },
      items
    };
  }

  function exportReportCsv(state) {
    if (!state || !state.items) return;
    const items = state.items;
    const headers = [
      'Resource ID', 'Name', 'Category', 'Service Label', 'Account ID', 'Finding',
      'Current Config', 'Recommended Config', 'Monthly Savings (USD)', 'Annual Savings (USD)',
      'Savings (%)', 'Migration Effort', 'Performance Risk', 'Action Guidance'
    ];
    const rows = [headers.join(',')];
    for (const i of items) {
      const escape = v => '"' + String(v || '').replace(/"/g, '""') + '"';
      rows.push([
        escape(i.id), escape(i.name), escape(i.category), escape(i.serviceLabel), escape(i.accountId),
        escape(i.finding), escape(i.currentConfig), escape(i.recommendedConfig),
        i.monthlySavingsUsd || 0, i.annualSavingsUsd || 0, i.savingsPercentage || 0,
        escape(i.migrationEffort), escape(i.performanceRisk), escape(i.actionGuidance)
      ].join(','));
    }
    const csvContent = '\uFEFF' + rows.join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `aws-finops-report-${state.metadata?.accountId || 'export'}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  window.normalizeDataset = normalizeDataset;
  window.exportReportCsv = exportReportCsv;

})(typeof window !== 'undefined' ? window : global);
"""

with open('engine.js', 'w', encoding='utf-8') as f:
    f.write(header + body)

print('engine.js written successfully!')
