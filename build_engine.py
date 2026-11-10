import os, json, shutil
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
    'ap-south-2': { regionLabel: '하이데라바드 (ap-south-2)', natHourlyUsd: 0.056, natPerGbUsd: 0.056, natMonthlyFixedUsd: 40.88, albHourlyUsd: 0.0225, albMonthlyFixedUsd: 20.08, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03 },
    'ap-northeast-1': { regionLabel: '도쿄 (ap-northeast-1)', natHourlyUsd: 0.062, natPerGbUsd: 0.062, natMonthlyFixedUsd: 45.26, albHourlyUsd: 0.0243, albMonthlyFixedUsd: 21.39, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03 },
    'ap-northeast-3': { regionLabel: '오사카 (ap-northeast-3)', natHourlyUsd: 0.062, natPerGbUsd: 0.062, natMonthlyFixedUsd: 45.26, albHourlyUsd: 0.0243, albMonthlyFixedUsd: 21.39, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03 },
    'ap-southeast-1': { regionLabel: '싱가포르 (ap-southeast-1)', natHourlyUsd: 0.059, natPerGbUsd: 0.059, natMonthlyFixedUsd: 43.07, albHourlyUsd: 0.0252, albMonthlyFixedUsd: 22.05, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03 },
    'ap-southeast-2': { regionLabel: '시드니 (ap-southeast-2)', natHourlyUsd: 0.059, natPerGbUsd: 0.059, natMonthlyFixedUsd: 43.07, albHourlyUsd: 0.0252, albMonthlyFixedUsd: 22.05, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.055, cwLogsPerGbUsd: 0.033 },
    'us-east-1': { regionLabel: '미국 버지니아 (us-east-1)', natHourlyUsd: 0.045, natPerGbUsd: 0.045, natMonthlyFixedUsd: 32.85, albHourlyUsd: 0.0225, albMonthlyFixedUsd: 20.08, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03 },
    'us-east-2': { regionLabel: '미국 오하이오 (us-east-2)', natHourlyUsd: 0.045, natPerGbUsd: 0.045, natMonthlyFixedUsd: 32.85, albHourlyUsd: 0.0225, albMonthlyFixedUsd: 20.08, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03 },
    'us-west-1': { regionLabel: '미국 캘리포니아 (us-west-1)', natHourlyUsd: 0.048, natPerGbUsd: 0.048, natMonthlyFixedUsd: 35.04, albHourlyUsd: 0.027, albMonthlyFixedUsd: 23.36, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.055, cwLogsPerGbUsd: 0.033 },
    'us-west-2': { regionLabel: '미국 오레곤 (us-west-2)', natHourlyUsd: 0.045, natPerGbUsd: 0.045, natMonthlyFixedUsd: 32.85, albHourlyUsd: 0.0225, albMonthlyFixedUsd: 20.08, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03 },
    'eu-west-1': { regionLabel: '아일랜드 (eu-west-1)', natHourlyUsd: 0.048, natPerGbUsd: 0.048, natMonthlyFixedUsd: 35.04, albHourlyUsd: 0.0252, albMonthlyFixedUsd: 22.05, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03 },
    'eu-central-1': { regionLabel: '프랑크푸르트 (eu-central-1)', natHourlyUsd: 0.048, natPerGbUsd: 0.048, natMonthlyFixedUsd: 35.04, albHourlyUsd: 0.0252, albMonthlyFixedUsd: 22.05, eipHourlyUsd: 0.005, eipMonthlyUsd: 3.65, ebsSnapPerGbUsd: 0.05, cwLogsPerGbUsd: 0.03 }
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

  function extractRegionFromArn(arn, fallback = 'ap-northeast-2') {
    if (arn && String(arn).startsWith('arn:aws:')) {
      const parts = String(arn).split(':');
      if (parts.length >= 4 && parts[3].trim()) {
        return parts[3].trim();
      }
    }
    return fallback;
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

  function extractMetric(metrics, namePrefix) {
    if (!Array.isArray(metrics)) return null;
    const prefix = String(namePrefix || '').toUpperCase();
    for (const m of metrics) {
      if (String(m.name || '').toUpperCase().startsWith(prefix)) {
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

  function mergeRawSnapshots(baseRaw, newRaw) {
    if (!baseRaw) return newRaw;
    if (!newRaw) return baseRaw;
    const merged = JSON.parse(JSON.stringify(baseRaw));
    const bMeta = merged.metadata || {};
    const nMeta = newRaw.metadata || {};

    const bAccts = new Set(String(bMeta.accountId || '').split(',').map(x => x.trim()).filter(Boolean));
    const nAccts = new Set(String(nMeta.accountId || '').split(',').map(x => x.trim()).filter(Boolean));
    for (const a of nAccts) bAccts.add(a);
    const allAccts = Array.from(bAccts).sort();

    const bRegs = new Set(String(bMeta.region || '').split(',').map(x => x.trim()).filter(Boolean));
    const nRegs = new Set(String(nMeta.region || '').split(',').map(x => x.trim()).filter(Boolean));
    for (const r of nRegs) bRegs.add(r);
    const allRegs = Array.from(bRegs).sort();

    merged.metadata = Object.assign({}, bMeta, {
      accountId: allAccts.length ? allAccts.join(', ') : 'Multi-Account',
      accountAlias: allAccts.length > 1 ? `Multi-Account (${allAccts.length}개 계정 통합)` : (nMeta.accountAlias || bMeta.accountAlias || 'aws-account'),
      region: allRegs.length ? allRegs.join(', ') : 'ap-northeast-2',
      collectedAt: nMeta.collectedAt || bMeta.collectedAt,
      sourceMode: 'merged_snapshots'
    });

    const listKeys = [
      ['ec2', 'instanceArn'],
      ['ebs', 'volumeArn'],
      ['rds', 'resourceArn'],
      ['ecs', 'serviceArn'],
      ['lambda', 'functionArn'],
      ['idle', 'resourceArn'],
      ['extendedSupport', 'resourceArn']
    ];
    for (const [key, idField] of listKeys) {
      const existing = Array.from(merged[key] || []);
      const seen = new Set(existing.map(x => String(x[idField] || x.resourceId || '')));
      for (const item of (newRaw[key] || [])) {
        const kVal = String(item[idField] || item.resourceId || '');
        if (!seen.has(kVal)) {
          existing.push(item);
          seen.add(kVal);
        }
      }
      merged[key] = existing;
    }

    const bNet = merged.networkAudit || { summary: {}, items: [] };
    const nNet = newRaw.networkAudit || { summary: {}, items: [] };
    const netSeen = new Set((bNet.items || []).map(x => String(x.resourceId || '')));
    const netItems = Array.from(bNet.items || []);
    for (const ni of (nNet.items || [])) {
      const k = String(ni.resourceId || '');
      if (!netSeen.has(k)) {
        netItems.push(ni);
        netSeen.add(k);
      }
    }
    const netSum = {};
    for (const sk of ['totalEipCount', 'unattachedEipCount', 'totalAlbCount', 'idleOrNoTargetAlbCount', 'totalNatGwCount', 'idleOrRedundantNatGwCount', 'missingS3EndpointVpcCount']) {
      netSum[sk] = Number((bNet.summary || {})[sk] || 0) + Number((nNet.summary || {})[sk] || 0);
    }
    merged.networkAudit = { summary: netSum, items: netItems };

    const bStg = merged.storageLifecycleAudit || { summary: {}, items: [] };
    const nStg = newRaw.storageLifecycleAudit || { summary: {}, items: [] };
    const stgSeen = new Set((bStg.items || []).map(x => String(x.resourceId || '')));
    const stgItems = Array.from(bStg.items || []);
    for (const si of (nStg.items || [])) {
      const k = String(si.resourceId || '');
      if (!stgSeen.has(k)) {
        stgItems.push(si);
        stgSeen.add(k);
      }
    }
    const stgSum = {};
    for (const sk of ['agedEbsSnapshotCount', 'agedEbsSnapshotTotalGb', 'agedRdsSnapshotCount', 'agedRdsSnapshotTotalGb', 'neverExpireLogGroupCount', 'neverExpireLogTotalGb', 's3NoLifecycleBucketCount']) {
      stgSum[sk] = Number((bStg.summary || {})[sk] || 0) + Number((nStg.summary || {})[sk] || 0);
    }
    merged.storageLifecycleAudit = { summary: stgSum, items: stgItems };

    const bCe = Number((merged.costExplorer || {}).lastMonthTotalUsd || 0);
    const nCe = Number((newRaw.costExplorer || {}).lastMonthTotalUsd || 0);
    merged.costExplorer = {
      lastMonthTotalUsd: Math.round((bCe + nCe) * 100) / 100,
      billingPeriod: '멀티 스냅샷 합산 청구액 기준'
    };

    return merged;
  }

  function normalizeDataset(raw, allowEc2Graviton = true, excludeOptimized = false) {
    if (!raw) return window.STUDIO_DEMO_STATE;

    const meta = raw.metadata || {};
    const accountId = meta.accountId || 'Unknown';
    const region = meta.region || 'ap-northeast-2';
    const primaryRegion = String(region).split(',')[0].trim() || 'ap-northeast-2';
    const regPricing = raw.regionalPricing || getRegionalPricing(primaryRegion);

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

      const curFam = currentCfg.includes('.') ? currentCfg.split('.')[0] : currentCfg;
      const recFam = recCfg.includes('.') ? recCfg.split('.')[0] : recCfg;
      let compWarn = null;
      if (isGravitonRec) {
        compWarn = '⚠️ [Graviton ARM64 & RI/SP 주의] OS 이미지(AMI)/컨테이너 ARM64 호환성 사전 검증이 필수이며, 기존 x86 Standard RI(예약 인스턴스) 적용 시 패밀리 변경으로 할인 혜택이 해제될 수 있습니다.';
      } else if (finding === 'Overprovisioned' && recCfg !== currentCfg) {
        if (curFam !== recFam) {
          compWarn = `💡 [약정(RI/SP) 확인] 패밀리 변경(${curFam} → ${recFam}) 시 Standard RI 할인이 미적용될 수 있습니다. Compute Savings Plans 또는 Convertible RI 여부를 확인하세요.`;
        } else {
          compWarn = '💡 [약정(RI/SP) 확인] 인스턴스 크기 축소 시 활성 EC2 RI(Size-Flexible 여부) 및 Savings Plans 약정 사용률을 함께 점검하세요.';
        }
      }

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
        region: extractRegionFromArn(arn, primaryRegion),
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

      const curVolSize = Number(cur.volumeSize || 0);
      const curBaseIops = Number(cur.volumeBaselineIOPS || 0);
      const recBaseIops = Number(optCfg.volumeBaselineIOPS || 3000);
      let ebsWarn = null;
      if (cur.volumeType === 'gp2' && optCfg.volumeType === 'gp3' && (curVolSize > 1000 || curBaseIops > recBaseIops)) {
        ebsWarn = `⚠️ [대용량 gp2 → gp3 Baseline IOPS 하락 주의] 1TB 초과 gp2(${curVolSize}GB, 기본 ${curBaseIops} IOPS / 250MB/s)를 기본 gp3(${recBaseIops} IOPS / 125MB/s)로 단순 전환하면 IOPS·처리량이 낮아집니다. 피크 IOPS를 확인하고 필요시 gp3 추가 IOPS/Throughput을 프로비저닝하세요.`;
      }

      items.push({
        id: resId, arn, name, category: 'EBS', serviceLabel: 'Amazon EBS',
        accountId: rec.accountId || accountId,
        region: extractRegionFromArn(arn, primaryRegion),
        environment: extractTag(tags, 'Environment', 'Production'),
        owner: extractTag(tags, 'Owner', '-'),
        serviceTag: extractTag(tags, 'Service', 'Storage'),
        finding: findingEbs, reasonCodes: ['EBSVolumeTypeOptimization'],
        currentConfig: curStr, recommendedConfig: recStr, alternativeConfig: null,
        compatibilityWarning: ebsWarn,
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

      let rdsWarn = null;
      if (recCls !== curCls && monthlySav > 0) {
        rdsWarn = `💡 [RDS 예약 인스턴스(RI) 확인] ${curCls} → ${recCls} 클래스 변경 전 활성 RDS RI 약정 적용 여부를 확인하세요. (패밀리 변경 시 RI 할인이 해제될 수 있음)`;
      }

      items.push({
        id: resId, arn, name: resId, category: 'RDS', serviceLabel: 'Amazon RDS / Aurora',
        accountId: rec.accountId || accountId,
        region: extractRegionFromArn(arn, primaryRegion),
        environment: extractTag(tags, 'Environment', 'Production'),
        owner: extractTag(tags, 'Owner', '-'),
        serviceTag: extractTag(tags, 'Service', 'Database'),
        finding, reasonCodes: reasons, currentConfig: curStr, recommendedConfig: recStr,
        alternativeConfig: null, compatibilityWarning: rdsWarn,
        migrationEffort: 'Low', performanceRisk: 'Low',
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
        region: extractRegionFromArn(arn, primaryRegion),
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
        region: extractRegionFromArn(arn, primaryRegion),
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
        region: extractRegionFromArn(arn, primaryRegion),
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
          resourceArn: `arn:aws:eks:${primaryRegion}:${accountId}:cluster/${cn}`,
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
      const extArn = rec.resourceArn || resId;

      items.push({
        id: resId, arn: extArn, name, category: 'ExtendedSupport',
        serviceLabel: `Extended Support (${stype})`,
        accountId,
        region: extractRegionFromArn(extArn, primaryRegion),
        environment: rec.environment || 'Production', owner: rec.owner || '-',
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
    const regLabel = regPricing.regionLabel || primaryRegion;
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

      let netWarn = null;
      if (subType === 'IdleNATGW') {
        netWarn = '⚠️ [Cross-AZ 데이터 전송비 & 고가용성(HA) 주의] 운영(Production) 환경에서 가용영역(AZ)별 NAT Gateway를 단일 AZ로 통폐합하면 AZ 장애 시 단일장애점(SPOF)이 되며 Cross-AZ 데이터 전송비($0.01/GB)가 발생할 수 있습니다. 운영 환경은 무료 S3/DynamoDB Gateway VPC Endpoint만 우선 적용하고, 단일 NAT 통합은 비운영(Dev/Staging) 환경에만 적용하세요.';
      }

      items.push({
        id: resId, arn: resId, name, category: 'Network', serviceLabel: 'EIP / ALB / NAT 점검',
        accountId,
        region: extractRegionFromArn(resId, primaryRegion),
        environment: rec.environment || 'Production', owner: rec.owner || '-',
        serviceTag: subType, finding, reasonCodes: [subType],
        currentConfig: rec.currentConfig || '-',
        recommendedConfig: rec.recommendedConfig || '무료 S3/DynamoDB Gateway VPC Endpoint 생성 및 비운영 NAT 통합',
        alternativeConfig: null, isGravitonRecommendation: false, compatibilityWarning: netWarn,
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

      let stgWarn = null;
      if (subType === 'AgedEBSSnapshot') {
        const archiveRate = Math.round(ebsSnapRate * 0.25 * 10000) / 10000;
        stgWarn = `💡 [컴플라이언스 장기 보관 대안] 규정상 삭제가 불가한 90일+ 스냅샷은 'EBS Snapshot Archive' 티어로 전환 시 스토리지 단가를 최대 75%($${ebsSnapRate} → $${archiveRate}/GB-월, 최소 90일 보관) 절감할 수 있습니다.`;
      }

      items.push({
        id: resId, arn: resId, name, category: 'StorageLifecycle', serviceLabel: '스냅샷 / 로그 / S3 수명주기',
        accountId,
        region: extractRegionFromArn(resId, primaryRegion),
        environment: rec.environment || 'Production', owner: rec.owner || '-',
        serviceTag: subType, finding, reasonCodes: [subType],
        currentConfig: rec.currentConfig || '-',
        recommendedConfig: rec.recommendedConfig || '수명주기(Lifecycle) 정책 적용',
        alternativeConfig: null, isGravitonRecommendation: false, compatibilityWarning: stgWarn,
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

  function exportReportCsv(state, krwRate = 1384.5) {
    if (!state || !state.items) return;
    const items = state.items;
    const rate = Number(krwRate) || 1384.5;
    const headers = [
      'Category', 'Service Label', 'Resource Name', 'Resource ID', 'Account ID', 'Region',
      'Environment', 'Owner', 'Finding', 'Current Config', 'Recommended Config',
      'Utilization Summary', 'Monthly Savings (USD)', 'Monthly Savings (KRW)',
      'Annual Savings (USD)', 'Annual Savings (KRW)', 'Savings (%)',
      'Migration Effort', 'Performance Risk', 'Compatibility / FinOps Warning', 'Action Guidance'
    ];
    const rows = [headers.join(',')];
    const escape = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';
    for (const i of items) {
      const mUsd = Number(i.monthlySavingsUsd || 0);
      const aUsd = Number(i.annualSavingsUsd || 0);
      rows.push([
        escape(i.category), escape(i.serviceLabel), escape(i.name), escape(i.id),
        escape(i.accountId), escape(i.region || state.metadata?.region || ''),
        escape(i.environment), escape(i.owner), escape(i.finding),
        escape(i.currentConfig), escape(i.recommendedConfig), escape(i.utilizationSummary),
        mUsd.toFixed(2), Math.round(mUsd * rate),
        aUsd.toFixed(2), Math.round(aUsd * rate),
        i.savingsPercentage || 0,
        escape(i.migrationEffort), escape(i.performanceRisk),
        escape(i.compatibilityWarning || ''), escape(i.actionGuidance)
      ].join(','));
    }
    const csvContent = '\uFEFF' + rows.join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `AWS_Compute_Optimizer_Report_${(state.metadata?.accountId || 'export').replace(/[^a-zA-Z0-9_-]/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function buildExecutiveReportHtml(state, krwRate = 1384.5, fxSource = 'AWS Invoice 기준환율', forWord = false) {
    const meta = (state && state.metadata) || {};
    const kpis = (state && state.kpis) || {};
    const items = (state && state.items) || [];
    const rate = Number(krwRate) || 1384.5;
    const fmtUsd = v => '$' + Number(v || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const fmtKrw = v => '₩' + Math.round(Number(v || 0) * rate).toLocaleString('ko-KR');

    const monthlyUsd = Number(kpis.totalMonthlySavingsUsd || 0);
    const annualUsd = Number(kpis.totalAnnualSavingsUsd || 0);
    const quickUsd = Number(kpis.quickWinMonthlySavingsUsd || 0);
    const coStatus = meta.computeOptimizerStatus || 'Active';

    const ce = (state && state.costExplorer) || {};
    const billUsd = Number(ce.lastMonthTotalUsd || 0);
    const billPct = ce.savingsVsBillPercentage;
    const billSubHtml = (billUsd > 0 && billPct != null)
      ? `<div style="font-size:11px; color:#ea580c; font-weight:700; margin-top:4px;">최근 30일 청구액($${Math.round(billUsd).toLocaleString()}) 대비 -${billPct}% 절감 가능</div>`
      : '';

    let rowsHtml = '';
    for (const item of items) {
      const fNorm = String(item.finding || '').trim().toUpperCase().replace(/_/g, '');
      const isOptSame = fNorm === 'OPTIMIZED' || (
        item.currentConfig === item.recommendedConfig && Number(item.monthlySavingsUsd || 0) <= 0 && fNorm !== 'UNDERPROVISIONED'
      );
      const badgeColor =
        fNorm === 'UNDERPROVISIONED' ? '#ea580c' :
        fNorm === 'OVERPROVISIONED' ? '#0891b2' :
        fNorm === 'NOTOPTIMIZED' ? '#ca8a04' :
        (item.category === 'Idle' || fNorm === 'IDLE' || fNorm === 'UNATTACHED') ? '#d97706' :
        isOptSame ? '#059669' :
        fNorm === 'EXTENDEDSUPPORT' ? '#7c3aed' : '#0891b2';

      const badgeLabel =
        fNorm === 'UNDERPROVISIONED' ? '🔥 Underprovisioned' :
        fNorm === 'OVERPROVISIONED' ? '🧊 Overprovisioned' :
        fNorm === 'NOTOPTIMIZED' ? '⚠️ NotOptimized' :
        isOptSame ? '✅ Optimized (적정)' :
        fNorm === 'EXTENDEDSUPPORT' ? '⏳ Extended Support' :
        (item.category === 'Idle' || fNorm === 'IDLE' || fNorm === 'UNATTACHED') ? `🧹 ${item.finding} (유휴)` : item.finding;

      const specHtml = isOptSame
        ? `<div style="margin-top:3px;"><span style="display:inline-block; background:#d1fae5; color:#065f46; border:1px solid #6ee7b7; font-size:10px; font-weight:700; padding:1px 6px; border-radius:4px; margin-right:4px;">적정 유지</span><span style="color:#059669; font-weight:700; font-size:12px;">스펙 변경 불필요 (현재 구성 최적)</span></div>`
        : `<div style="margin-top:3px;"><span style="display:inline-block; background:#dc2626; color:#fff; font-size:10px; font-weight:700; padding:1px 6px; border-radius:4px; margin-right:4px;">권고</span><span style="color:#ea580c; font-weight:800; font-size:12px;">${item.recommendedConfig}</span></div>`;

      const warnHtml = item.compatibilityWarning
        ? `<div style="margin-top:4px; padding:4px 7px; border-radius:4px; background:#fef3c7; border:1px solid #fcd34d; color:#92400e; font-size:10px; font-weight:600;">${item.compatibilityWarning}</div>`
        : '';

      const savHtml = Number(item.monthlySavingsUsd || 0) <= 0
        ? '<span style="color:#94a3b8;">-</span>'
        : `<div><span style="font-weight:800; font-size:14px; color:#ea580c;">${fmtUsd(item.monthlySavingsUsd)}</span><span style="font-size:11px; color:#64748b;">/월</span> <span style="display:inline-block; margin-left:4px; padding:1px 7px; border-radius:99px; font-size:11px; font-weight:800; background:#ffedd5; color:#c2410c; border:1px solid #fdba74;">-${item.savingsPercentage}%</span></div><div style="font-size:11px; color:#475569; font-weight:600; margin-top:3px;">${fmtKrw(item.monthlySavingsUsd)}/월 · 연 ${fmtKrw(item.annualSavingsUsd)}</div>`;

      rowsHtml += `
        <tr>
          <td><strong>${item.category}</strong></td>
          <td>
            <div style="font-weight:600; color:#0f172a;">${item.name}</div>
            <div style="font-size:11px; color:#64748b; font-family:monospace;">${item.id} | ${item.region || meta.region || '-'} | ${item.environment} | ${item.owner}</div>
          </td>
          <td style="white-space:nowrap;"><span style="display:inline-block; padding:3px 10px; border-radius:99px; font-size:11px; font-weight:700; color:#fff; background:${badgeColor};">${badgeLabel}</span></td>
          <td>
            <div style="color:#475569; font-size:12px;">현재: ${item.currentConfig}</div>
            ${specHtml}
            ${warnHtml}
          </td>
          <td style="font-size:12px; color:#334155;">${item.utilizationSummary}<div style="font-size:11px; color:#64748b; margin-top:2px;">${item.actionGuidance || ''}</div></td>
          <td style="text-align:right; white-space:nowrap;">${savHtml}</td>
        </tr>`;
    }

    let catCards = '';
    const byCat = (state && state.byCategory) || {};
    for (const catKey of Object.keys(byCat)) {
      const c = byCat[catKey];
      catCards += `
        <div style="border:1px solid #e2e8f0; border-radius:8px; padding:12px; background:#f8fafc;">
          <div style="font-size:12px; color:#64748b; font-weight:600;">${catKey} (${c.optimizableCount}/${c.count} 대상)</div>
          <div style="font-size:18px; font-weight:700; color:#0f172a; margin-top:4px;">${fmtUsd(c.monthlySavingsUsd)}<span style="font-size:12px; font-weight:400; color:#64748b;"> /월</span></div>
          <div style="font-size:11px; color:#059669;">연간 ${fmtKrw(c.annualSavingsUsd)} 절감</div>
        </div>`;
    }

    const topBar = forWord ? '' : `
      <div class="no-print">
        <div><strong>AWS Compute Optimizer 공식 보고서 미리보기 (Serverless Client-Side Engine)</strong> — 우측 버튼을 눌러 PDF로 저장하거나 인쇄할 수 있습니다.</div>
        <button class="btn-print" onclick="window.print()">🖨️ PDF 저장 / 인쇄하기</button>
      </div>`;

    return `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" lang="ko">
<head>
<meta charset="UTF-8">
<title>AWS Compute Optimizer 비용 최적화 리포트 - ${meta.accountId || 'AWS'}</title>
<style>
  @page { size: A4 landscape; margin: 14mm; }
  body { font-family: 'Pretendard', 'Malgun Gothic', -apple-system, sans-serif; color: #0f172a; margin: 0; padding: 32px; background: #ffffff; }
  .no-print { margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; background: #0f172a; color: #fff; padding: 12px 20px; border-radius: 8px; }
  .btn-print { background: #2563eb; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer; }
  table { width: 100%; border-collapse: collapse; margin-top: 16px; }
  th { background: #0f172a; color: #ffffff; text-align: left; padding: 10px 12px; font-size: 12px; }
  td { border-bottom: 1px solid #e2e8f0; padding: 10px 12px; font-size: 13px; vertical-align: top; }
  @media print { .no-print { display: none !important; } body { padding: 0; } }
</style>
</head>
<body>
  ${topBar}
  <div style="border-bottom: 3px solid #0f172a; padding-bottom: 16px; margin-bottom: 24px; display:flex; justify-content:space-between; align-items:flex-end;">
    <div>
      <div style="font-size:12px; font-weight:700; color:#2563eb; letter-spacing:0.05em;">AWS WELL-ARCHITECTED COST OPTIMIZATION REPORT</div>
      <h1 style="margin: 6px 0 0 0; font-size: 26px;">AWS Compute Optimizer 비용 최적화 진단 리포트</h1>
    </div>
    <div style="text-align:right; font-size:12px; color:#475569;">
      <div><strong>Account:</strong> ${meta.accountId || '-'} (${meta.accountAlias || '-'}) | <strong>Compute Optimizer:</strong> ${coStatus}</div>
      <div><strong>Region:</strong> ${meta.region || '-'} | <strong>기준 환율:</strong> ₩${rate.toLocaleString('ko-KR')}/USD (${fxSource})</div>
      <div><strong>진단 일시:</strong> ${String(meta.collectedAt || '').slice(0, 19).replace('T', ' ')} UTC</div>
    </div>
  </div>

  <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px;">
    <div style="border: 1px solid #cbd5e1; border-left: 5px solid #ea580c; border-radius: 8px; padding: 16px;">
      <div style="font-size:12px; color:#475569;">예상 월간 총 절감액</div>
      <div style="font-size:26px; font-weight:800; color:#ea580c; margin-top:4px;">${fmtUsd(monthlyUsd)}</div>
      <div style="font-size:13px; font-weight:600; color:#0f172a;">월 약 ${fmtKrw(monthlyUsd)}</div>
      ${billSubHtml}
    </div>
    <div style="border: 1px solid #cbd5e1; border-left: 5px solid #2563eb; border-radius: 8px; padding: 16px;">
      <div style="font-size:12px; color:#475569;">예상 연간 총 절감액 (12개월)</div>
      <div style="font-size:26px; font-weight:800; color:#1d4ed8; margin-top:4px;">${fmtUsd(annualUsd)}</div>
      <div style="font-size:13px; font-weight:600; color:#0f172a;">연 약 ${fmtKrw(annualUsd)}</div>
    </div>
    <div style="border: 1px solid #cbd5e1; border-left: 5px solid #0ea5e9; border-radius: 8px; padding: 16px;">
      <div style="font-size:12px; color:#475569;">Quick Win (즉시 조치 가능 절감액)</div>
      <div style="font-size:26px; font-weight:800; color:#0369a1; margin-top:4px;">${fmtUsd(quickUsd)}<span style="font-size:14px;">/월</span></div>
      <div style="font-size:13px; color:#475569;">난이도 Low 이하 리소스</div>
    </div>
    <div style="border: 1px solid #cbd5e1; border-left: 5px solid #dc2626; border-radius: 8px; padding: 16px;">
      <div style="font-size:12px; color:#475569;">최적화 대상 / 성능 위험 리소스</div>
      <div style="font-size:26px; font-weight:800; color:#0f172a; margin-top:4px;">${kpis.optimizableResourcesCount || 0}건 <span style="font-size:16px; color:#dc2626;">(위험 ${kpis.performanceRiskCount || 0}건)</span></div>
      <div style="font-size:13px; color:#475569;">전체 ${kpis.totalResourcesAnalyzed || 0}개 리소스 분석 완료</div>
    </div>
  </div>

  <h3 style="margin: 20px 0 10px 0; font-size: 15px;">서비스 카테고리별 절감 요약 (Extended Support · EIP/ALB/NAT · 노후 스냅샷/로그/S3 포함)</h3>
  <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px;">
    ${catCards}
  </div>

  <h3 style="margin: 20px 0 8px 0; font-size: 15px;">리소스별 상세 최적화 권고 내역 (절감액 순)</h3>
  <table>
    <thead>
      <tr>
        <th style="width:70px;">유형</th>
        <th style="width:230px;">리소스명 / 식별자</th>
        <th style="width:110px;">진단 상태</th>
        <th style="width:260px;">스펙 변경 권고 및 FinOps 주의사항</th>
        <th>최근 14일 피크 사용률 및 조치 가이드</th>
        <th style="width:140px; text-align:right;">예상 월 절감액</th>
      </tr>
    </thead>
    <tbody>
      ${rowsHtml}
    </tbody>
  </table>
</body>
</html>`;
  }

  function exportReportHtml(state, krwRate = 1384.5, fxSource = 'AWS Invoice 기준환율') {
    const html = buildExecutiveReportHtml(state, krwRate, fxSource, false);
    const win = window.open('', '_blank');
    if (win) {
      win.document.open();
      win.document.write(html);
      win.document.close();
    } else {
      const blob = new Blob([html], { type: 'text/html;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `AWS_Compute_Optimizer_Report_${(state.metadata?.accountId || 'export').replace(/[^a-zA-Z0-9_-]/g, '_')}.html`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  }

  function exportReportDoc(state, krwRate = 1384.5, fxSource = 'AWS Invoice 기준환율') {
    const html = '\uFEFF' + buildExecutiveReportHtml(state, krwRate, fxSource, true);
    const blob = new Blob([html], { type: 'application/msword;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `AWS_Compute_Optimizer_Executive_Report_${(state.metadata?.accountId || 'export').replace(/[^a-zA-Z0-9_-]/g, '_')}.doc`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  window.normalizeDataset = normalizeDataset;
  window.mergeRawSnapshots = mergeRawSnapshots;
  window.exportReportCsv = exportReportCsv;
  window.exportReportHtml = exportReportHtml;
  window.exportReportDoc = exportReportDoc;

})(typeof window !== 'undefined' ? window : global);
"""

with open('engine.js', 'w', encoding='utf-8') as f:
    f.write(header + body)

shutil.copyfile('engine.js', os.path.join('frontend', 'engine.js'))
if os.path.exists(os.path.join('frontend', 'index.html')):
    shutil.copyfile(os.path.join('frontend', 'index.html'), 'index.html')

print('engine.js and frontend/engine.js generated & synced successfully!')
