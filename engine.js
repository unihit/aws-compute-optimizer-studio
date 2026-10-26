// AWS Compute Optimizer FinOps Studio - Client-Side Standalone Engine
// Auto-generated for zero-server / GitHub Pages deployment.
(function(window) {
  'use strict';

  window.STUDIO_DEMO_RAW = {"metadata": {"accountId": "123456789012", "accountAlias": "prod-core-workloads", "region": "ap-northeast-2", "collectedAt": "2026-10-26T02:41:36.435461+00:00", "sourceMode": "demo", "lookBackPeriodInDays": 14, "enhancedInfrastructureMetrics": "Active", "computeOptimizerStatus": "Active", "computeOptimizerNote": "Compute Optimizer 정상 활성화됨 (최근 14일 CloudWatch 메트릭 수집 중)"}, "costExplorer": {"lastMonthTotalUsd": 28450.0, "savingsPlansCoveragePct": 68.4, "riCoveragePct": 54.2, "billingPeriod": "최근 30일 청구 기준"}, "exchangeRateInfo": {"rate": 1384.5, "source": "AWS Invoice (직전 마감 청구서 확정 환율)", "mode": "aws_invoice", "invoiceId": "KR-INV-202609-88412", "billingPeriod": "2026-09", "updatedAt": "2026-10-26T02:41:36.435461+00:00"}, "ec2": [{"instanceArn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0a1b2c3d4e5f60001", "accountId": "123456789012", "instanceName": "prd-order-api-was-01", "currentInstanceType": "m5.2xlarge", "finding": "Overprovisioned", "findingReasonCodes": ["CPUOverprovisioned", "MemoryOverprovisioned"], "lookBackPeriodInDays": 14.0, "utilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 18.4}, {"name": "MEMORY", "statistic": "MAXIMUM", "value": 31.2}, {"name": "NETWORK_IN_BYTES_PER_SECOND", "statistic": "MAXIMUM", "value": 12450000}], "currentPerformanceRisk": "VeryLow", "effectiveRecommendationPreferences": {"cpuVendorArchitectures": ["AWS_ARM64", "CURRENT"], "enhancedInfrastructureMetrics": "Active", "lookBackPeriod": "DAYS_14"}, "recommendationOptions": [{"instanceType": "m7g.xlarge", "rank": 1, "performanceRisk": 1.0, "migrationEffort": "Medium", "platformDifferences": ["Architecture"], "projectedUtilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 32.1}, {"name": "MEMORY", "statistic": "MAXIMUM", "value": 62.4}], "savingsOpportunity": {"savingsOpportunityPercentage": 54.2, "estimatedMonthlySavings": {"currency": "USD", "value": 186.4}}, "savingsOpportunityAfterDiscounts": {"savingsOpportunityPercentage": 54.2, "estimatedMonthlySavings": {"currency": "USD", "value": 142.1}}}, {"instanceType": "m6i.xlarge", "rank": 2, "performanceRisk": 1.0, "migrationEffort": "VeryLow", "platformDifferences": [], "projectedUtilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 35.8}, {"name": "MEMORY", "statistic": "MAXIMUM", "value": 62.4}], "savingsOpportunity": {"savingsOpportunityPercentage": 50.0, "estimatedMonthlySavings": {"currency": "USD", "value": 172.0}}}], "tags": [{"key": "Environment", "value": "Production"}, {"key": "Service", "value": "Order-API"}, {"key": "Owner", "value": "commerce-platform-team"}]}, {"instanceArn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0a1b2c3d4e5f60002", "accountId": "123456789012", "instanceName": "prd-payment-batch-worker-01", "currentInstanceType": "c5.4xlarge", "finding": "Overprovisioned", "findingReasonCodes": ["CPUOverprovisioned", "NetworkBandwidthOverprovisioned"], "lookBackPeriodInDays": 14.0, "utilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 14.2}, {"name": "MEMORY", "statistic": "MAXIMUM", "value": 24.8}], "currentPerformanceRisk": "VeryLow", "recommendationOptions": [{"instanceType": "c6i.xlarge", "rank": 1, "performanceRisk": 1.0, "migrationEffort": "VeryLow", "platformDifferences": [], "projectedUtilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 51.0}, {"name": "MEMORY", "statistic": "MAXIMUM", "value": 49.6}], "savingsOpportunity": {"savingsOpportunityPercentage": 75.0, "estimatedMonthlySavings": {"currency": "USD", "value": 412.5}}}], "tags": [{"key": "Environment", "value": "Production"}, {"key": "Service", "value": "Payment-Batch"}, {"key": "Owner", "value": "fin-settlement-team"}]}, {"instanceArn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0a1b2c3d4e5f60003", "accountId": "123456789012", "instanceName": "prd-search-indexer-node-02", "currentInstanceType": "r5.large", "finding": "Underprovisioned", "findingReasonCodes": ["MemoryUnderprovisioned", "CPUUnderprovisioned"], "lookBackPeriodInDays": 14.0, "utilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 94.6}, {"name": "MEMORY", "statistic": "MAXIMUM", "value": 92.1}], "currentPerformanceRisk": "High", "recommendationOptions": [{"instanceType": "r6i.xlarge", "rank": 1, "performanceRisk": 1.0, "migrationEffort": "VeryLow", "platformDifferences": [], "projectedUtilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 45.2}, {"name": "MEMORY", "statistic": "MAXIMUM", "value": 46.0}], "savingsOpportunity": {"savingsOpportunityPercentage": 0.0, "estimatedMonthlySavings": {"currency": "USD", "value": 0.0}}}], "tags": [{"key": "Environment", "value": "Production"}, {"key": "Service", "value": "Search-Engine"}, {"key": "Owner", "value": "search-ai-team"}]}, {"instanceArn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0a1b2c3d4e5f60004", "accountId": "123456789012", "instanceName": "stg-analytics-etl-01", "currentInstanceType": "r5.2xlarge", "finding": "Overprovisioned", "findingReasonCodes": ["CPUOverprovisioned", "MemoryOverprovisioned"], "lookBackPeriodInDays": 14.0, "utilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 21.5}, {"name": "MEMORY", "statistic": "MAXIMUM", "value": 28.0}], "currentPerformanceRisk": "VeryLow", "recommendationOptions": [{"instanceType": "r7g.large", "rank": 1, "performanceRisk": 1.5, "migrationEffort": "Medium", "platformDifferences": ["Architecture"], "projectedUtilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 68.4}, {"name": "MEMORY", "statistic": "MAXIMUM", "value": 74.2}], "savingsOpportunity": {"savingsOpportunityPercentage": 76.8, "estimatedMonthlySavings": {"currency": "USD", "value": 345.8}}}, {"instanceType": "r6i.large", "rank": 2, "performanceRisk": 1.0, "migrationEffort": "VeryLow", "platformDifferences": [], "projectedUtilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 72.1}, {"name": "MEMORY", "statistic": "MAXIMUM", "value": 74.2}], "savingsOpportunity": {"savingsOpportunityPercentage": 73.5, "estimatedMonthlySavings": {"currency": "USD", "value": 330.9}}}], "tags": [{"key": "Environment", "value": "Staging"}, {"key": "Service", "value": "Data-ETL"}, {"key": "Owner", "value": "data-eng-team"}]}, {"instanceArn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0a1b2c3d4e5f60005", "accountId": "123456789012", "instanceName": "prd-auth-gateway-01", "currentInstanceType": "m6i.large", "finding": "Optimized", "findingReasonCodes": [], "lookBackPeriodInDays": 14.0, "utilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 64.2}, {"name": "MEMORY", "statistic": "MAXIMUM", "value": 58.9}], "currentPerformanceRisk": "Low", "recommendationOptions": [{"instanceType": "m6i.large", "rank": 1, "performanceRisk": 1.0, "migrationEffort": "VeryLow", "platformDifferences": [], "projectedUtilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 64.2}, {"name": "MEMORY", "statistic": "MAXIMUM", "value": 58.9}], "savingsOpportunity": {"savingsOpportunityPercentage": 0.0, "estimatedMonthlySavings": {"currency": "USD", "value": 0.0}}}], "tags": [{"key": "Environment", "value": "Production"}, {"key": "Service", "value": "Auth-Gateway"}, {"key": "Owner", "value": "sec-platform-team"}]}], "ebs": [{"volumeArn": "arn:aws:ec2:ap-northeast-2:123456789012:volume/vol-0987654321fedcba1", "accountId": "123456789012", "currentConfiguration": {"volumeType": "gp2", "volumeSize": 2000, "volumeBaselineIOPS": 6000, "volumeBurstIOPS": 6000, "volumeBaselineThroughput": 250, "volumeBurstThroughput": 250, "rootVolume": false}, "finding": "NotOptimized", "utilizationMetrics": [{"name": "VolumeReadOpsPerSecond", "statistic": "MAXIMUM", "value": 850.0}, {"name": "VolumeWriteOpsPerSecond", "statistic": "MAXIMUM", "value": 1120.0}], "lookBackPeriodInDays": 14.0, "currentPerformanceRisk": "Low", "volumeRecommendationOptions": [{"configuration": {"volumeType": "gp3", "volumeSize": 2000, "volumeBaselineIOPS": 3000, "volumeBurstIOPS": 3000, "volumeBaselineThroughput": 125, "volumeBurstThroughput": 125}, "rank": 1, "performanceRisk": 1.0, "savingsOpportunity": {"savingsOpportunityPercentage": 20.0, "estimatedMonthlySavings": {"currency": "USD", "value": 45.6}}}], "tags": [{"key": "Name", "value": "prd-order-db-backup-vol"}, {"key": "Environment", "value": "Production"}, {"key": "Owner", "value": "commerce-platform-team"}]}, {"volumeArn": "arn:aws:ec2:ap-northeast-2:123456789012:volume/vol-0987654321fedcba2", "accountId": "123456789012", "currentConfiguration": {"volumeType": "io1", "volumeSize": 1000, "volumeBaselineIOPS": 10000, "volumeBurstIOPS": 10000, "volumeBaselineThroughput": 500, "volumeBurstThroughput": 500, "rootVolume": false}, "finding": "NotOptimized", "utilizationMetrics": [{"name": "VolumeReadOpsPerSecond", "statistic": "MAXIMUM", "value": 1400.0}, {"name": "VolumeWriteOpsPerSecond", "statistic": "MAXIMUM", "value": 980.0}], "lookBackPeriodInDays": 14.0, "currentPerformanceRisk": "VeryLow", "volumeRecommendationOptions": [{"configuration": {"volumeType": "gp3", "volumeSize": 1000, "volumeBaselineIOPS": 4000, "volumeBurstIOPS": 4000, "volumeBaselineThroughput": 250, "volumeBurstThroughput": 250}, "rank": 1, "performanceRisk": 1.0, "savingsOpportunity": {"savingsOpportunityPercentage": 84.5, "estimatedMonthlySavings": {"currency": "USD", "value": 642.0}}}], "tags": [{"key": "Name", "value": "prd-legacy-log-store"}, {"key": "Environment", "value": "Production"}, {"key": "Owner", "value": "infra-ops-team"}]}], "rds": [{"resourceArn": "arn:aws:rds:ap-northeast-2:123456789012:db:prd-member-mysql-01", "accountId": "123456789012", "engine": "mysql", "engineVersion": "8.0.35", "promotionTier": 1, "currentDBInstanceClass": "db.r5.4xlarge", "dbClusterIdentifier": "", "instanceFinding": "Overprovisioned", "storageFinding": "NotOptimized", "instanceFindingReasonCodes": ["CPUOverprovisioned", "EBSIOPSOverprovisioned"], "storageFindingReasonCodes": ["EBSVolumeAllocatedStorageUnderprovisioned"], "currentStorageConfiguration": {"storageType": "io1", "allocatedStorage": 1500, "iops": 12000, "maxAllocatedStorage": 3000}, "utilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 19.8}, {"name": "Memory", "statistic": "MAXIMUM", "value": 41.2}, {"name": "DatabaseConnections", "statistic": "MAXIMUM", "value": 142.0}], "instanceRecommendationOptions": [{"dbInstanceClass": "db.r6g.2xlarge", "rank": 1, "performanceRisk": 1.0, "projectedUtilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 36.4}], "savingsOpportunity": {"savingsOpportunityPercentage": 55.4, "estimatedMonthlySavings": {"currency": "USD", "value": 980.2}}}], "storageRecommendationOptions": [{"storageConfiguration": {"storageType": "gp3", "allocatedStorage": 1500, "iops": 6000, "storageThroughput": 250}, "rank": 1, "savingsOpportunity": {"savingsOpportunityPercentage": 62.0, "estimatedMonthlySavings": {"currency": "USD", "value": 510.0}}}], "tags": [{"key": "Environment", "value": "Production"}, {"key": "Service", "value": "Member-Core"}, {"key": "Owner", "value": "dba-team"}]}, {"resourceArn": "arn:aws:rds:ap-northeast-2:123456789012:db:prd-catalog-aurora-pg-writer", "accountId": "123456789012", "engine": "aurora-postgresql", "engineVersion": "15.4", "promotionTier": 1, "currentDBInstanceClass": "db.r6g.2xlarge", "dbClusterIdentifier": "prd-catalog-aurora-cluster", "instanceFinding": "Overprovisioned", "storageFinding": "Optimized", "instanceFindingReasonCodes": ["CPUOverprovisioned"], "storageFindingReasonCodes": [], "utilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 24.1}, {"name": "Memory", "statistic": "MAXIMUM", "value": 52.0}], "instanceRecommendationOptions": [{"dbInstanceClass": "db.r6g.xlarge", "rank": 1, "performanceRisk": 1.0, "projectedUtilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 48.2}], "savingsOpportunity": {"savingsOpportunityPercentage": 50.0, "estimatedMonthlySavings": {"currency": "USD", "value": 445.0}}}], "storageRecommendationOptions": [], "tags": [{"key": "Environment", "value": "Production"}, {"key": "Service", "value": "Catalog"}, {"key": "Owner", "value": "catalog-dev-team"}]}], "ecs": [{"serviceArn": "arn:aws:ecs:ap-northeast-2:123456789012:service/prd-eks-fargate-cluster/notification-dispatcher-svc", "accountId": "123456789012", "currentServiceConfiguration": {"memory": 8192, "cpu": 4096, "AutoScalingConfiguration": "TARGET_TRACKING_SCALING", "taskDefinitionArn": "arn:aws:ecs:ap-northeast-2:123456789012:task-definition/notification-dispatcher:28"}, "finding": "Overprovisioned", "findingReasonCodes": ["CPUOverprovisioned", "MemoryOverprovisioned"], "utilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 22.4}, {"name": "Memory", "statistic": "MAXIMUM", "value": 26.8}], "serviceRecommendationOptions": [{"memory": 2048, "cpu": 1024, "SavingsOpportunity": {"savingsOpportunityPercentage": 75.0, "estimatedMonthlySavings": {"currency": "USD", "value": 218.4}}, "projectedUtilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 78.2}, {"name": "Memory", "statistic": "MAXIMUM", "value": 79.5}]}], "tags": [{"key": "Environment", "value": "Production"}, {"key": "Service", "value": "Notification"}, {"key": "Owner", "value": "messaging-team"}]}], "lambda": [{"functionArn": "arn:aws:lambda:ap-northeast-2:123456789012:function:prd-image-thumbnail-resizer:$LATEST", "accountId": "123456789012", "functionVersion": "$LATEST", "currentConfiguration": {"memorySize": 3008, "timeout": 60}, "finding": "NotOptimized", "findingReasonCodes": ["MemoryOverprovisioned"], "numberOfInvocations": 4850000, "utilizationMetrics": [{"name": "Duration", "statistic": "AVERAGE", "value": 340.5}, {"name": "Memory", "statistic": "MAXIMUM", "value": 612.0}], "memorySizeRecommendationOptions": [{"rank": 1, "memorySize": 1024, "projectedUtilizationMetrics": [{"name": "DurationLowerBound", "statistic": "AVERAGE", "value": 355.0}, {"name": "DurationUpperBound", "statistic": "AVERAGE", "value": 390.0}], "savingsOpportunity": {"savingsOpportunityPercentage": 61.5, "estimatedMonthlySavings": {"currency": "USD", "value": 164.8}}}], "tags": [{"key": "Environment", "value": "Production"}, {"key": "Service", "value": "Media-Pipeline"}, {"key": "Owner", "value": "media-team"}]}], "idle": [{"resourceArn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0idle998877665544", "resourceId": "i-0idle998877665544", "resourceType": "EC2Instance", "accountId": "123456789012", "finding": "Idle", "findingDescription": "Instance CPU utilization has been consistently < 1% and network I/O < 5MB/day over the past 14 days.", "lookBackPeriodInDays": 14.0, "savingsOpportunity": {"savingsOpportunityPercentage": 100.0, "estimatedMonthlySavings": {"currency": "USD", "value": 284.0}}, "utilizationMetrics": [{"name": "CPU", "statistic": "MAXIMUM", "value": 0.6}, {"name": "Network", "statistic": "MAXIMUM", "value": 0.1}], "tags": [{"key": "Name", "value": "dev-old-poc-server-2025"}, {"key": "Environment", "value": "Development"}, {"key": "Owner", "value": "ai-lab-team"}]}, {"resourceArn": "arn:aws:ec2:ap-northeast-2:123456789012:volume/vol-0idle112233445566", "resourceId": "vol-0idle112233445566", "resourceType": "EBSVolume", "accountId": "123456789012", "finding": "Unattached", "findingDescription": "EBS volume (500 GB gp3) has been unattached and had zero read/write IOPS for 14 days.", "lookBackPeriodInDays": 14.0, "savingsOpportunity": {"savingsOpportunityPercentage": 100.0, "estimatedMonthlySavings": {"currency": "USD", "value": 45.6}}, "utilizationMetrics": [{"name": "VolumeReadOpsPerSecond", "statistic": "MAXIMUM", "value": 0.0}, {"name": "VolumeWriteOpsPerSecond", "statistic": "MAXIMUM", "value": 0.0}], "tags": [{"key": "Name", "value": "unattached-snapshot-restore-test"}, {"key": "Environment", "value": "Staging"}, {"key": "Owner", "value": "infra-ops-team"}]}, {"resourceArn": "arn:aws:rds:ap-northeast-2:123456789012:db:stg-abandoned-qa-db", "resourceId": "stg-abandoned-qa-db", "resourceType": "RDSDBInstance", "accountId": "123456789012", "finding": "Idle", "findingDescription": "RDS instance has had 0 active database connections for 14 consecutive days.", "lookBackPeriodInDays": 14.0, "savingsOpportunity": {"savingsOpportunityPercentage": 100.0, "estimatedMonthlySavings": {"currency": "USD", "value": 318.0}}, "utilizationMetrics": [{"name": "DatabaseConnections", "statistic": "MAXIMUM", "value": 0.0}, {"name": "CPU", "statistic": "MAXIMUM", "value": 2.1}], "tags": [{"key": "Environment", "value": "Staging"}, {"key": "Service", "value": "QA-Test"}, {"key": "Owner", "value": "qa-automation-team"}]}], "extendedSupport": [{"resourceArn": "arn:aws:eks:ap-northeast-2:123456789012:cluster/prd-legacy-eks-cluster-v127", "resourceId": "prd-legacy-eks-cluster-v127", "resourceName": "prd-legacy-eks-cluster-v127", "serviceType": "EKS", "engineOrPlatform": "Amazon EKS", "currentVersion": "1.27", "recommendedVersion": "1.31+ (Standard Support)", "finding": "ExtendedSupport", "statusDetail": "EKS 1.27 표준 지원 종료 — 클러스터당 시간당 $0.50 추가 과금 (총 $0.60/hr vs 표준 $0.10/hr)", "monthlySurchargeUsd": 365.0, "savingsPercentage": 83.3, "environment": "Production", "owner": "container-platform-team", "actionGuidance": "EKS 클러스터 버전을 1.31 이상(Standard Support)으로 인플레이스 업그레이드하여 월 $365.00 추가 요금 제거"}, {"resourceArn": "arn:aws:rds:ap-northeast-2:123456789012:db:prd-legacy-mysql57-core", "resourceId": "prd-legacy-mysql57-core", "resourceName": "prd-legacy-mysql57-core", "serviceType": "RDS", "engineOrPlatform": "RDS MySQL (db.r5.2xlarge, 8 vCPU, Multi-AZ)", "currentVersion": "5.7.44", "recommendedVersion": "MySQL 8.0 LTS", "finding": "ExtendedSupport", "statusDetail": "RDS MySQL 5.7 Extended Support 과금 중 — 16 vCPU(Multi-AZ) × $0.10/vCPU-hr 추가 요금 발생", "monthlySurchargeUsd": 1168.0, "savingsPercentage": 100.0, "environment": "Production", "owner": "dba-team", "actionGuidance": "Blue/Green 배포를 활용해 RDS MySQL 8.0으로 메이저 버전 업그레이드 시 Extended Support 추가 과금($1,168/월) 100% 절감"}, {"resourceArn": "arn:aws:rds:ap-northeast-2:123456789012:db:stg-old-pg11-reporting", "resourceId": "stg-old-pg11-reporting", "resourceName": "stg-old-pg11-reporting", "serviceType": "RDS", "engineOrPlatform": "Aurora PostgreSQL (db.r6g.large, 2 vCPU)", "currentVersion": "11.21", "recommendedVersion": "PostgreSQL 15 / 16", "finding": "ExtendedSupport", "statusDetail": "PostgreSQL 11 Extended Support 과금 중 — 2 vCPU × $0.10/vCPU-hr 추가 과금 발생", "monthlySurchargeUsd": 146.0, "savingsPercentage": 100.0, "environment": "Staging", "owner": "data-eng-team", "actionGuidance": "Aurora PostgreSQL 15 이상으로 메이저 버전 업그레이드하여 Extended Support 회피"}], "networkAudit": {"summary": {"totalEipCount": 8, "unattachedEipCount": 3, "totalAlbCount": 6, "idleOrNoTargetAlbCount": 2, "totalNatGwCount": 4, "idleOrRedundantNatGwCount": 1, "missingS3EndpointVpcCount": 1}, "items": [{"resourceId": "eipalloc-0a112233445566778 (43.201.102.11)", "resourceName": "unassigned-nat-eip-01", "subType": "UnusedEIP", "finding": "Unattached", "currentConfig": "Public IPv4 (미연결 EIP: 43.201.102.11)", "recommendedConfig": "EIP 릴리스 (ReleaseAddress)", "utilizationDetail": "연결된 인스턴스(InstanceId) 및 네트워크 인터페이스(AssociationId) 없음 — 시간당 $0.005 과금", "monthlySavingsUsd": 3.65, "environment": "Production", "owner": "net-ops-team", "actionGuidance": "전체 EIP 8개 중 미사용 3개 감지: 불필요한 공인 IPv4 주소를 즉시 Release하여 유휴 IPv4 요금 제거"}, {"resourceId": "eipalloc-0b998877665544332 (3.38.210.45)", "resourceName": "old-bastion-floating-eip", "subType": "UnusedEIP", "finding": "Unattached", "currentConfig": "Public IPv4 (미연결 EIP: 3.38.210.45)", "recommendedConfig": "EIP 릴리스 (ReleaseAddress)", "utilizationDetail": "퇴역한 Bastion 호스트 해제 후 방치된 EIP — 시간당 $0.005 과금", "monthlySavingsUsd": 3.65, "environment": "Staging", "owner": "sec-platform-team", "actionGuidance": "DNS 레코드 참조 여부 확인 후 `aws ec2 release-address`로 즉시 반환 권고"}, {"resourceId": "eipalloc-0c554433221100998 (13.125.88.190)", "resourceName": "dev-temp-webhook-eip", "subType": "UnusedEIP", "finding": "Unattached", "currentConfig": "Public IPv4 (미연결 EIP: 13.125.88.190)", "recommendedConfig": "EIP 릴리스 (ReleaseAddress)", "utilizationDetail": "미연결 상태로 방치된 개발용 EIP — 시간당 $0.005 과금", "monthlySavingsUsd": 3.65, "environment": "Development", "owner": "commerce-platform-team", "actionGuidance": "미연결 EIP 즉시 반환 (월 $3.65 절감)"}, {"resourceId": "arn:aws:elasticloadbalancing:ap-northeast-2:123456789012:loadbalancer/app/stg-legacy-admin-alb/50dc6c495c0c9188", "resourceName": "stg-legacy-admin-alb", "subType": "IdleALB", "finding": "Idle", "currentConfig": "Application Load Balancer (Internet-facing)", "recommendedConfig": "ALB 삭제 또는 단일 공유 ALB(Host/Path 라우팅)로 통폐합", "utilizationDetail": "리전 내 전체 ALB 6개 중 활성 타겟(Healthy Target) 0개 및 최근 14일 RequestCount 0건", "monthlySavingsUsd": 22.4, "environment": "Staging", "owner": "infra-ops-team", "actionGuidance": "연결된 타겟 그룹에 정상 인스턴스가 없는 유휴 ALB: 삭제 시 기본 시간당 요금($16.43+) 및 IPv4 비용 즉시 절감"}, {"resourceId": "arn:aws:elasticloadbalancing:ap-northeast-2:123456789012:loadbalancer/app/dev-Campaign-preview-alb/91ab2c334d5e6f77", "resourceName": "dev-campaign-preview-alb", "subType": "LowTrafficALB", "finding": "Overprovisioned", "currentConfig": "독립 ALB 단독 운영 (일 평균 요청 < 50건)", "recommendedConfig": "기존 공용 Ingress/ALB에 Host Header 규칙으로 통합", "utilizationDetail": "리전 내 전체 ALB 6개 점검 결과: 마이크로서비스별 개별 ALB 과다 생성으로 고정비 중복 발생", "monthlySavingsUsd": 18.25, "environment": "Development", "owner": "marketing-dev-team", "actionGuidance": "단일 ALB( 또는 EKS ALB Controller `group.name` 공유)로 통합하여 ALB 대수 축소 권고"}, {"resourceId": "nat-09988776655443322 (vpc-0stg1122)", "resourceName": "stg-az2-redundant-nat-gw", "subType": "IdleNATGW", "finding": "Idle", "currentConfig": "NAT Gateway (Multi-AZ 중복 배치 + S3 Gateway Endpoint 미설치)", "recommendedConfig": "비프로덕션 단일 NAT 통합 + 무료 S3/DynamoDB Gateway Endpoint 추가", "utilizationDetail": "전체 NAT GW 4개 중 최근 14일 BytesOut 트래픽 < 10MB/일 및 S3 Gateway Endpoint 누락 감지", "monthlySavingsUsd": 48.5, "environment": "Staging", "owner": "net-ops-team", "actionGuidance": "Staging 환경은 단일 AZ NAT GW로 통합($32.85/월 기본료 절감)하고 무료 S3 Gateway VPC Endpoint를 생성하여 NAT 데이터 처리비($0.045/GB) 제거"}]}, "storageLifecycleAudit": {"summary": {"agedEbsSnapshotCount": 14, "agedEbsSnapshotTotalGb": 2400, "agedRdsSnapshotCount": 3, "agedRdsSnapshotTotalGb": 900, "neverExpireLogGroupCount": 9, "neverExpireLogTotalGb": 320, "s3NoLifecycleBucketCount": 4}, "items": [{"resourceId": "ebs-snapshots-older-than-90d (총 14개 스냅샷)", "resourceName": "90일 이상 장기 방치된 EBS 스냅샷 묶음 (2,400 GB)", "subType": "AgedEBSSnapshot", "finding": "NotOptimized", "currentConfig": "EBS Standard Snapshot 14개 (총 2,400 GB · 90~420일 경과)", "recommendedConfig": "불필요 스냅샷 삭제 또는 AWS Data Lifecycle Manager(DLM) 30일 정책 적용", "utilizationDetail": "이미 삭제된 볼륨(Orphaned)에서 생성된 오래된 수동 스냅샷 14개 ($0.05/GB-월 과금 중)", "monthlySavingsUsd": 120.0, "savingsPercentage": 100.0, "environment": "Production", "owner": "infra-ops-team", "actionGuidance": "90일 이상 경과된 수동 EBS 스냅샷 정리 및 DLM 자동 수명주기 정책 설정으로 월 $120.00 절감"}, {"resourceId": "rds-manual-snapshots-older-than-90d (총 3개)", "resourceName": "장기 방치된 RDS 수동 스냅샷 묶음 (900 GB)", "subType": "AgedRDSSnapshot", "finding": "NotOptimized", "currentConfig": "RDS Manual Snapshot 3개 (총 900 GB · 120일 이상 경과)", "recommendedConfig": "수동 스냅샷 정리 또는 S3 Export 후 아카이빙", "utilizationDetail": "마이그레이션/패치 전 생성 후 삭제하지 않은 수동 DB 스냅샷 3개 ($0.095/GB-월 과금)", "monthlySavingsUsd": 85.5, "savingsPercentage": 100.0, "environment": "Production", "owner": "dba-team", "actionGuidance": "불필요한 구버전 RDS 수동 스냅샷 3개 삭제 시 백업 스토리지 추가 과금 월 $85.50 즉시 제거"}, {"resourceId": "/aws/lambda/* 및 /ecs/prd-* (총 9개 로그 그룹)", "resourceName": "CloudWatch Logs 무기한 보관(Never Expire) 그룹 9개", "subType": "CloudWatchLogsNoRetention", "finding": "NotOptimized", "currentConfig": "Retention: Never Expire (누적 320 GB 보관 중)", "recommendedConfig": "보관 주기 30일(Production) / 7일(Staging·Dev) 설정", "utilizationDetail": "로그 그룹 9개에 만료 주기(retentionInDays) 미설정으로 오래된 로그가 영구 과금 중", "monthlySavingsUsd": 16.0, "savingsPercentage": 80.0, "environment": "Production", "owner": "devops-team", "actionGuidance": "`aws logs put-retention-policy`로 보관 주기를 14~30일로 일괄 지정하여 누적 로그 스토리지 비용 절감"}, {"resourceId": "s3://prd-app-access-logs-archive 외 3개 버킷", "resourceName": "S3 Lifecycle(수명주기) 정책 미설정 대용량 버킷 4개", "subType": "S3NoLifecycle", "finding": "NotOptimized", "currentConfig": "S3 Standard 단일 스토리지 클래스 (Lifecycle 규칙 없음)", "recommendedConfig": "S3 Intelligent-Tiering 또는 30일 후 Glacier Instant Retrieval 전환 정책 추가", "utilizationDetail": "수명주기(LifecycleConfiguration) 및 미완료 멀티파트 업로드 자동 삭제 규칙이 없는 버킷 4개 감지", "monthlySavingsUsd": 94.0, "savingsPercentage": 55.0, "environment": "Production", "owner": "data-eng-team", "actionGuidance": "30일 경과 객체 Glacier 전환 및 7일 경과 Incomplete Multipart Upload 자동 삭제 규칙 설정"}]}};
  window.STUDIO_DEMO_STATE = {"metadata": {"accountId": "123456789012", "accountAlias": "prod-core-workloads", "region": "ap-northeast-2", "collectedAt": "2026-10-26T02:41:36.435461+00:00", "sourceMode": "demo", "lookBackPeriodInDays": 14, "allowEc2Graviton": true, "excludeOptimized": false, "computeOptimizerStatus": "Active", "computeOptimizerNote": "Compute Optimizer 정상 활성화됨 (최근 14일 CloudWatch 메트릭 수집 중)"}, "exchangeRateInfo": {"rate": 1384.5, "source": "AWS Invoice (직전 마감 청구서 확정 환율)", "mode": "aws_invoice", "invoiceId": "KR-INV-202609-88412", "billingPeriod": "2026-09", "updatedAt": "2026-10-26T02:41:36.435461+00:00"}, "costExplorer": {"lastMonthTotalUsd": 28450.0, "savingsVsBillPercentage": 23.5, "savingsPlansCoveragePct": 68.4, "riCoveragePct": 54.2, "billingPeriod": "최근 30일 청구 기준"}, "kpis": {"totalResourcesAnalyzed": 27, "optimizableResourcesCount": 25, "performanceRiskCount": 1, "totalMonthlySavingsUsd": 6680.06, "totalAnnualSavingsUsd": 80160.72, "quickWinMonthlySavingsUsd": 4468.86, "extendedSupportCount": 3, "extendedSupportMonthlyUsd": 1679.0, "storageLifecycleMonthlyUsd": 309.1, "totalEipCount": 8, "unattachedEipCount": 3, "totalAlbCount": 6, "idleOrNoTargetAlbCount": 2, "totalNatGwCount": 4, "idleOrRedundantNatGwCount": 1, "agedSnapshotCount": 17, "agedSnapshotTotalGb": 3300, "neverExpireLogGroupCount": 9, "s3NoLifecycleBucketCount": 4}, "networkSummary": {"totalEipCount": 8, "unattachedEipCount": 3, "totalAlbCount": 6, "idleOrNoTargetAlbCount": 2, "totalNatGwCount": 4, "idleOrRedundantNatGwCount": 1, "missingS3EndpointVpcCount": 1}, "storageLifecycleSummary": {"agedEbsSnapshotCount": 14, "agedEbsSnapshotTotalGb": 2400, "agedRdsSnapshotCount": 3, "agedRdsSnapshotTotalGb": 900, "neverExpireLogGroupCount": 9, "neverExpireLogTotalGb": 320, "s3NoLifecycleBucketCount": 4}, "byCategory": {"RDS": {"category": "RDS", "count": 2, "optimizableCount": 2, "monthlySavingsUsd": 1935.2, "annualSavingsUsd": 23222.4}, "ExtendedSupport": {"category": "ExtendedSupport", "count": 3, "optimizableCount": 3, "monthlySavingsUsd": 1679.0, "annualSavingsUsd": 20148.0}, "EC2": {"category": "EC2", "count": 5, "optimizableCount": 3, "monthlySavingsUsd": 944.7, "annualSavingsUsd": 11336.4}, "EBS": {"category": "EBS", "count": 2, "optimizableCount": 2, "monthlySavingsUsd": 687.6, "annualSavingsUsd": 8251.2}, "Idle": {"category": "Idle", "count": 3, "optimizableCount": 3, "monthlySavingsUsd": 647.6, "annualSavingsUsd": 7771.2}, "StorageLifecycle": {"category": "StorageLifecycle", "count": 4, "optimizableCount": 4, "monthlySavingsUsd": 309.1, "annualSavingsUsd": 3709.2}, "ECS": {"category": "ECS", "count": 1, "optimizableCount": 1, "monthlySavingsUsd": 218.4, "annualSavingsUsd": 2620.8}, "Lambda": {"category": "Lambda", "count": 1, "optimizableCount": 1, "monthlySavingsUsd": 164.8, "annualSavingsUsd": 1977.6}, "Network": {"category": "Network", "count": 6, "optimizableCount": 6, "monthlySavingsUsd": 93.66, "annualSavingsUsd": 1123.92}}, "findingDistribution": {"Overprovisioned": 7, "NotOptimized": 7, "ExtendedSupport": 3, "Idle": 8, "Underprovisioned": 1, "Optimized": 1}, "actionPlan": {"phase1QuickWins": [{"id": "prd-member-mysql-01", "arn": "arn:aws:rds:ap-northeast-2:123456789012:db:prd-member-mysql-01", "name": "prd-member-mysql-01", "category": "RDS", "serviceLabel": "Amazon RDS / Aurora", "accountId": "123456789012", "environment": "Production", "owner": "dba-team", "serviceTag": "Member-Core", "finding": "Overprovisioned", "reasonCodes": ["CPUOverprovisioned", "EBSIOPSOverprovisioned", "EBSVolumeAllocatedStorageUnderprovisioned"], "currentConfig": "db.r5.4xlarge (mysql 8.0.35) + io1 1500GB", "recommendedConfig": "db.r6g.2xlarge (mysql 8.0.35) + gp3 1500GB", "alternativeConfig": null, "migrationEffort": "Low", "performanceRisk": "Low", "platformDifferences": ["GravitonDB"], "utilizationSummary": "CPU Max 19.8% / FreeableMem 41.2%", "projectedSummary": "Instance $980 + Storage $510 절감", "cpuMax": 19.8, "memoryMax": 41.2, "monthlySavingsUsd": 1490.2, "annualSavingsUsd": 17882.4, "savingsPercentage": 55.4, "actionGuidance": "정기 점검 윈도우에 db.r5.4xlarge → db.r6g.2xlarge 클래스 변경 및 스토리지 gp3 전환 권고", "tags": {"Environment": "Production", "Service": "Member-Core", "Owner": "dba-team"}}, {"id": "vol-0987654321fedcba2", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:volume/vol-0987654321fedcba2", "name": "prd-legacy-log-store", "category": "EBS", "serviceLabel": "Amazon EBS", "accountId": "123456789012", "environment": "Production", "owner": "infra-ops-team", "serviceTag": "Storage", "finding": "NotOptimized", "reasonCodes": ["EBSVolumeTypeOptimization"], "currentConfig": "io1 (1000GB, 10000 IOPS)", "recommendedConfig": "gp3 (1000GB, 4000 IOPS)", "alternativeConfig": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "Read 1400.0 IOPS / Write 980.0 IOPS", "projectedSummary": "gp3 전환 (무중단 ModifyVolume 가능)", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 642.0, "annualSavingsUsd": 7704.0, "savingsPercentage": 84.5, "actionGuidance": "AWS ModifyVolume API로 무중단 io1 → gp3 볼륨 전환", "tags": {"Name": "prd-legacy-log-store", "Environment": "Production", "Owner": "infra-ops-team"}}, {"id": "prd-catalog-aurora-pg-writer", "arn": "arn:aws:rds:ap-northeast-2:123456789012:db:prd-catalog-aurora-pg-writer", "name": "prd-catalog-aurora-pg-writer", "category": "RDS", "serviceLabel": "Amazon RDS / Aurora", "accountId": "123456789012", "environment": "Production", "owner": "catalog-dev-team", "serviceTag": "Catalog", "finding": "Overprovisioned", "reasonCodes": ["CPUOverprovisioned"], "currentConfig": "db.r6g.2xlarge (aurora-postgresql 15.4)", "recommendedConfig": "db.r6g.xlarge (aurora-postgresql 15.4)", "alternativeConfig": null, "migrationEffort": "Low", "performanceRisk": "Low", "platformDifferences": [], "utilizationSummary": "CPU Max 24.1% / FreeableMem 52.0%", "projectedSummary": "Instance $445 + Storage $0 절감", "cpuMax": 24.1, "memoryMax": 52.0, "monthlySavingsUsd": 445.0, "annualSavingsUsd": 5340.0, "savingsPercentage": 50.0, "actionGuidance": "정기 점검 윈도우에 db.r6g.2xlarge → db.r6g.xlarge 클래스 변경 및 스토리지 gp3 전환 권고", "tags": {"Environment": "Production", "Service": "Catalog", "Owner": "catalog-dev-team"}}, {"id": "i-0a1b2c3d4e5f60002", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0a1b2c3d4e5f60002", "name": "prd-payment-batch-worker-01", "category": "EC2", "serviceLabel": "Amazon EC2", "accountId": "123456789012", "environment": "Production", "owner": "fin-settlement-team", "serviceTag": "Payment-Batch", "finding": "Overprovisioned", "reasonCodes": ["CPUOverprovisioned", "NetworkBandwidthOverprovisioned"], "currentConfig": "c5.4xlarge", "recommendedConfig": "c6i.xlarge", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "CPU Max 14.2% / Mem Max 24.8%", "projectedSummary": "CPU 51.0% / Mem 49.6%", "cpuMax": 14.2, "memoryMax": 24.8, "monthlySavingsUsd": 412.5, "annualSavingsUsd": 4950.0, "savingsPercentage": 75.0, "actionGuidance": "c5.4xlarge → c6i.xlarge 리사이징 권고 (동일 아키텍처 내 세대 변경/축소 — 즉시 적용 가능)", "tags": {"Environment": "Production", "Service": "Payment-Batch", "Owner": "fin-settlement-team"}}, {"id": "stg-abandoned-qa-db", "arn": "arn:aws:rds:ap-northeast-2:123456789012:db:stg-abandoned-qa-db", "name": "stg-abandoned-qa-db", "category": "Idle", "serviceLabel": "Idle (RDSDBInstance)", "accountId": "123456789012", "environment": "Staging", "owner": "qa-automation-team", "serviceTag": "QA-Test", "finding": "Idle", "reasonCodes": ["Idle", "RDSDBInstance"], "currentConfig": "RDSDBInstance (Active Billing)", "recommendedConfig": "Stop / Snapshot 후 Terminate", "alternativeConfig": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "RDS instance has had 0 active database connections for 14 consecutive days.", "projectedSummary": "즉시 비용 100% 제거 가능", "cpuMax": 2.1, "memoryMax": null, "monthlySavingsUsd": 318.0, "annualSavingsUsd": 3816.0, "savingsPercentage": 100.0, "actionGuidance": "유휴 리소스(RDSDBInstance): 최종 스냅샷/백업 생성 후 중지 또는 삭제 권고", "tags": {"Environment": "Staging", "Service": "QA-Test", "Owner": "qa-automation-team"}}, {"id": "i-0idle998877665544", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0idle998877665544", "name": "dev-old-poc-server-2025", "category": "Idle", "serviceLabel": "Idle (EC2Instance)", "accountId": "123456789012", "environment": "Development", "owner": "ai-lab-team", "serviceTag": "Unused", "finding": "Idle", "reasonCodes": ["Idle", "EC2Instance"], "currentConfig": "EC2Instance (Active Billing)", "recommendedConfig": "Stop / Snapshot 후 Terminate", "alternativeConfig": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "Instance CPU utilization has been consistently < 1% and network I/O < 5MB/day over the past 14 days.", "projectedSummary": "즉시 비용 100% 제거 가능", "cpuMax": 0.6, "memoryMax": null, "monthlySavingsUsd": 284.0, "annualSavingsUsd": 3408.0, "savingsPercentage": 100.0, "actionGuidance": "유휴 리소스(EC2Instance): 최종 스냅샷/백업 생성 후 중지 또는 삭제 권고", "tags": {"Name": "dev-old-poc-server-2025", "Environment": "Development", "Owner": "ai-lab-team"}}, {"id": "notification-dispatcher-svc", "arn": "arn:aws:ecs:ap-northeast-2:123456789012:service/prd-eks-fargate-cluster/notification-dispatcher-svc", "name": "notification-dispatcher-svc", "category": "ECS", "serviceLabel": "Amazon ECS (Fargate)", "accountId": "123456789012", "environment": "Production", "owner": "messaging-team", "serviceTag": "Notification", "finding": "Overprovisioned", "reasonCodes": ["CPUOverprovisioned", "MemoryOverprovisioned"], "currentConfig": "4096 CPU / 8192 MB", "recommendedConfig": "1024 CPU / 2048 MB", "alternativeConfig": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "CPU Max 22.4% / Mem Max 26.8%", "projectedSummary": "Task Definition 리비전 업데이트", "cpuMax": 22.4, "memoryMax": 26.8, "monthlySavingsUsd": 218.4, "annualSavingsUsd": 2620.8, "savingsPercentage": 75.0, "actionGuidance": "ECS Task Definition 스펙을 1024 CPU / 2048 MB로 조정 후 롤링 배포", "tags": {"Environment": "Production", "Service": "Notification", "Owner": "messaging-team"}}, {"id": "prd-image-thumbnail-resizer:$LATEST", "arn": "arn:aws:lambda:ap-northeast-2:123456789012:function:prd-image-thumbnail-resizer:$LATEST", "name": "prd-image-thumbnail-resizer", "category": "Lambda", "serviceLabel": "AWS Lambda", "accountId": "123456789012", "environment": "Production", "owner": "media-team", "serviceTag": "Media-Pipeline", "finding": "NotOptimized", "reasonCodes": ["MemoryOverprovisioned"], "currentConfig": "3008 MB (Timeout 60s)", "recommendedConfig": "1024 MB", "alternativeConfig": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "Max Mem 612.0 MB / Avg Duration 340.5 ms", "projectedSummary": "최근 14일 호출 4,850,000회 기준", "cpuMax": null, "memoryMax": 612.0, "monthlySavingsUsd": 164.8, "annualSavingsUsd": 1977.6, "savingsPercentage": 61.5, "actionGuidance": "Lambda 메모리 설정을 3008MB → 1024MB로 하향 조정", "tags": {"Environment": "Production", "Service": "Media-Pipeline", "Owner": "media-team"}}, {"id": "ebs-snapshots-older-than-90d (총 14개 스냅샷)", "arn": "ebs-snapshots-older-than-90d (총 14개 스냅샷)", "name": "90일 이상 장기 방치된 EBS 스냅샷 묶음 (2,400 GB)", "category": "StorageLifecycle", "serviceLabel": "스냅샷 / 로그 / S3 수명주기", "accountId": "123456789012", "environment": "Production", "owner": "infra-ops-team", "serviceTag": "AgedEBSSnapshot", "finding": "NotOptimized", "reasonCodes": ["AgedEBSSnapshot"], "currentConfig": "EBS Standard Snapshot 14개 (총 2,400 GB · 90~420일 경과)", "recommendedConfig": "불필요 스냅샷 삭제 또는 AWS Data Lifecycle Manager(DLM) 30일 정책 적용", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "90일+ 장기 방치 스냅샷 (2400 GB × ap-northeast-2 (서울) 단가 $0.05/GB-월 = $120.00/월)", "projectedSummary": "ap-northeast-2 (서울) 리전 스토리지 단가 기준 산출", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 120.0, "annualSavingsUsd": 1440.0, "savingsPercentage": 100.0, "actionGuidance": "90일 이상 경과된 수동 EBS 스냅샷 정리 및 DLM 자동 수명주기 정책 설정으로 월 $120.00 절감", "tags": {}}, {"id": "s3://prd-app-access-logs-archive 외 3개 버킷", "arn": "s3://prd-app-access-logs-archive 외 3개 버킷", "name": "S3 Lifecycle(수명주기) 정책 미설정 대용량 버킷 4개", "category": "StorageLifecycle", "serviceLabel": "스냅샷 / 로그 / S3 수명주기", "accountId": "123456789012", "environment": "Production", "owner": "data-eng-team", "serviceTag": "S3NoLifecycle", "finding": "NotOptimized", "reasonCodes": ["S3NoLifecycle"], "currentConfig": "S3 Standard 단일 스토리지 클래스 (Lifecycle 규칙 없음)", "recommendedConfig": "S3 Intelligent-Tiering 또는 30일 후 Glacier Instant Retrieval 전환 정책 추가", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "수명주기(LifecycleConfiguration) 및 미완료 멀티파트 업로드 자동 삭제 규칙이 없는 버킷 4개 감지", "projectedSummary": "ap-northeast-2 (서울) 리전 스토리지 단가 기준 산출", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 94.0, "annualSavingsUsd": 1128.0, "savingsPercentage": 55.0, "actionGuidance": "30일 경과 객체 Glacier 전환 및 7일 경과 Incomplete Multipart Upload 자동 삭제 규칙 설정", "tags": {}}, {"id": "rds-manual-snapshots-older-than-90d (총 3개)", "arn": "rds-manual-snapshots-older-than-90d (총 3개)", "name": "장기 방치된 RDS 수동 스냅샷 묶음 (900 GB)", "category": "StorageLifecycle", "serviceLabel": "스냅샷 / 로그 / S3 수명주기", "accountId": "123456789012", "environment": "Production", "owner": "dba-team", "serviceTag": "AgedRDSSnapshot", "finding": "NotOptimized", "reasonCodes": ["AgedRDSSnapshot"], "currentConfig": "RDS Manual Snapshot 3개 (총 900 GB · 120일 이상 경과)", "recommendedConfig": "수동 스냅샷 정리 또는 S3 Export 후 아카이빙", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "마이그레이션/패치 전 생성 후 삭제하지 않은 수동 DB 스냅샷 3개 ($0.095/GB-월 과금)", "projectedSummary": "ap-northeast-2 (서울) 리전 스토리지 단가 기준 산출", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 85.5, "annualSavingsUsd": 1026.0, "savingsPercentage": 100.0, "actionGuidance": "불필요한 구버전 RDS 수동 스냅샷 3개 삭제 시 백업 스토리지 추가 과금 월 $85.50 즉시 제거", "tags": {}}, {"id": "vol-0987654321fedcba1", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:volume/vol-0987654321fedcba1", "name": "prd-order-db-backup-vol", "category": "EBS", "serviceLabel": "Amazon EBS", "accountId": "123456789012", "environment": "Production", "owner": "commerce-platform-team", "serviceTag": "Storage", "finding": "NotOptimized", "reasonCodes": ["EBSVolumeTypeOptimization"], "currentConfig": "gp2 (2000GB, 6000 IOPS)", "recommendedConfig": "gp3 (2000GB, 3000 IOPS)", "alternativeConfig": null, "migrationEffort": "VeryLow", "performanceRisk": "Low", "platformDifferences": [], "utilizationSummary": "Read 850.0 IOPS / Write 1120.0 IOPS", "projectedSummary": "gp3 전환 (무중단 ModifyVolume 가능)", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 45.6, "annualSavingsUsd": 547.2, "savingsPercentage": 20.0, "actionGuidance": "AWS ModifyVolume API로 무중단 gp2 → gp3 볼륨 전환", "tags": {"Name": "prd-order-db-backup-vol", "Environment": "Production", "Owner": "commerce-platform-team"}}], "phase2ArchModernization": [{"id": "prd-legacy-mysql57-core", "arn": "arn:aws:rds:ap-northeast-2:123456789012:db:prd-legacy-mysql57-core", "name": "prd-legacy-mysql57-core", "category": "ExtendedSupport", "serviceLabel": "Extended Support (RDS)", "accountId": "123456789012", "environment": "Production", "owner": "dba-team", "serviceTag": "RDS", "finding": "ExtendedSupport", "reasonCodes": ["VersionEndOfStandardSupport"], "currentConfig": "RDS MySQL (db.r5.2xlarge, 8 vCPU, Multi-AZ) (v5.7.44)", "recommendedConfig": "MySQL 8.0 LTS 업데이트", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "Medium", "performanceRisk": "Low", "platformDifferences": [], "utilizationSummary": "RDS MySQL 5.7 Extended Support 과금 중 — 16 vCPU(Multi-AZ) × $0.10/vCPU-hr 추가 요금 발생", "projectedSummary": "최신 버전 업데이트 시 추가 과금 월 $1,168.00 즉시 제거", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 1168.0, "annualSavingsUsd": 14016.0, "savingsPercentage": 100.0, "actionGuidance": "Blue/Green 배포를 활용해 RDS MySQL 8.0으로 메이저 버전 업그레이드 시 Extended Support 추가 과금($1,168/월) 100% 절감", "tags": {}}, {"id": "prd-legacy-eks-cluster-v127", "arn": "arn:aws:eks:ap-northeast-2:123456789012:cluster/prd-legacy-eks-cluster-v127", "name": "prd-legacy-eks-cluster-v127", "category": "ExtendedSupport", "serviceLabel": "Extended Support (EKS)", "accountId": "123456789012", "environment": "Production", "owner": "container-platform-team", "serviceTag": "EKS", "finding": "ExtendedSupport", "reasonCodes": ["VersionEndOfStandardSupport"], "currentConfig": "Amazon EKS (v1.27)", "recommendedConfig": "1.31+ (Standard Support) 업데이트", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "Medium", "performanceRisk": "Low", "platformDifferences": [], "utilizationSummary": "EKS 1.27 표준 지원 종료 — 클러스터당 시간당 $0.50 추가 과금 (총 $0.60/hr vs 표준 $0.10/hr)", "projectedSummary": "최신 버전 업데이트 시 추가 과금 월 $365.00 즉시 제거", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 365.0, "annualSavingsUsd": 4380.0, "savingsPercentage": 83.3, "actionGuidance": "EKS 클러스터 버전을 1.31 이상(Standard Support)으로 인플레이스 업그레이드하여 월 $365.00 추가 요금 제거", "tags": {}}, {"id": "i-0a1b2c3d4e5f60004", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0a1b2c3d4e5f60004", "name": "stg-analytics-etl-01", "category": "EC2", "serviceLabel": "Amazon EC2", "accountId": "123456789012", "environment": "Staging", "owner": "data-eng-team", "serviceTag": "Data-ETL", "finding": "Overprovisioned", "reasonCodes": ["CPUOverprovisioned", "MemoryOverprovisioned"], "currentConfig": "r5.2xlarge", "recommendedConfig": "r7g.large", "alternativeConfig": "r6i.large", "isGravitonRecommendation": true, "compatibilityWarning": "⚠️ Graviton(ARM64) 전환 주의: OS 이미지(AMI), 네이티브 C/C++ 바이너리, Docker 컨테이너 이미지 및 런타임 버전의 ARM64 아키텍처 호환성 사전 검증이 필수입니다.", "migrationEffort": "Medium", "performanceRisk": "VeryLow", "platformDifferences": ["Architecture"], "utilizationSummary": "CPU Max 21.5% / Mem Max 28.0%", "projectedSummary": "CPU 68.4% / Mem 74.2%", "cpuMax": 21.5, "memoryMax": 28.0, "monthlySavingsUsd": 345.8, "annualSavingsUsd": 4149.6, "savingsPercentage": 76.8, "actionGuidance": "r5.2xlarge → r7g.large 리사이징 권고 (Graviton ARM64 아키텍처 전환 — 호환성 검증 필요)", "tags": {"Environment": "Staging", "Service": "Data-ETL", "Owner": "data-eng-team"}}, {"id": "i-0a1b2c3d4e5f60001", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0a1b2c3d4e5f60001", "name": "prd-order-api-was-01", "category": "EC2", "serviceLabel": "Amazon EC2", "accountId": "123456789012", "environment": "Production", "owner": "commerce-platform-team", "serviceTag": "Order-API", "finding": "Overprovisioned", "reasonCodes": ["CPUOverprovisioned", "MemoryOverprovisioned"], "currentConfig": "m5.2xlarge", "recommendedConfig": "m7g.xlarge", "alternativeConfig": "m6i.xlarge", "isGravitonRecommendation": true, "compatibilityWarning": "⚠️ Graviton(ARM64) 전환 주의: OS 이미지(AMI), 네이티브 C/C++ 바이너리, Docker 컨테이너 이미지 및 런타임 버전의 ARM64 아키텍처 호환성 사전 검증이 필수입니다.", "migrationEffort": "Medium", "performanceRisk": "VeryLow", "platformDifferences": ["Architecture"], "utilizationSummary": "CPU Max 18.4% / Mem Max 31.2%", "projectedSummary": "CPU 32.1% / Mem 62.4%", "cpuMax": 18.4, "memoryMax": 31.2, "monthlySavingsUsd": 186.4, "annualSavingsUsd": 2236.8, "savingsPercentage": 54.2, "actionGuidance": "m5.2xlarge → m7g.xlarge 리사이징 권고 (Graviton ARM64 아키텍처 전환 — 호환성 검증 필요)", "tags": {"Environment": "Production", "Service": "Order-API", "Owner": "commerce-platform-team"}}, {"id": "stg-old-pg11-reporting", "arn": "arn:aws:rds:ap-northeast-2:123456789012:db:stg-old-pg11-reporting", "name": "stg-old-pg11-reporting", "category": "ExtendedSupport", "serviceLabel": "Extended Support (RDS)", "accountId": "123456789012", "environment": "Staging", "owner": "data-eng-team", "serviceTag": "RDS", "finding": "ExtendedSupport", "reasonCodes": ["VersionEndOfStandardSupport"], "currentConfig": "Aurora PostgreSQL (db.r6g.large, 2 vCPU) (v11.21)", "recommendedConfig": "PostgreSQL 15 / 16 업데이트", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "Medium", "performanceRisk": "Low", "platformDifferences": [], "utilizationSummary": "PostgreSQL 11 Extended Support 과금 중 — 2 vCPU × $0.10/vCPU-hr 추가 과금 발생", "projectedSummary": "최신 버전 업데이트 시 추가 과금 월 $146.00 즉시 제거", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 146.0, "annualSavingsUsd": 1752.0, "savingsPercentage": 100.0, "actionGuidance": "Aurora PostgreSQL 15 이상으로 메이저 버전 업그레이드하여 Extended Support 회피", "tags": {}}], "phase3PerformanceStabilization": [{"id": "i-0a1b2c3d4e5f60003", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0a1b2c3d4e5f60003", "name": "prd-search-indexer-node-02", "category": "EC2", "serviceLabel": "Amazon EC2", "accountId": "123456789012", "environment": "Production", "owner": "search-ai-team", "serviceTag": "Search-Engine", "finding": "Underprovisioned", "reasonCodes": ["MemoryUnderprovisioned", "CPUUnderprovisioned"], "currentConfig": "r5.large", "recommendedConfig": "r6i.xlarge", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "High", "platformDifferences": [], "utilizationSummary": "CPU Max 94.6% / Mem Max 92.1%", "projectedSummary": "CPU 45.2% / Mem 46.0%", "cpuMax": 94.6, "memoryMax": 92.1, "monthlySavingsUsd": 0.0, "annualSavingsUsd": 0.0, "savingsPercentage": 0.0, "actionGuidance": "성능 병목 위험(CPU 94.6% / Mem 92.1%): r6i.xlarge로 스케일업 권고", "tags": {"Environment": "Production", "Service": "Search-Engine", "Owner": "search-ai-team"}}]}, "items": [{"id": "prd-member-mysql-01", "arn": "arn:aws:rds:ap-northeast-2:123456789012:db:prd-member-mysql-01", "name": "prd-member-mysql-01", "category": "RDS", "serviceLabel": "Amazon RDS / Aurora", "accountId": "123456789012", "environment": "Production", "owner": "dba-team", "serviceTag": "Member-Core", "finding": "Overprovisioned", "reasonCodes": ["CPUOverprovisioned", "EBSIOPSOverprovisioned", "EBSVolumeAllocatedStorageUnderprovisioned"], "currentConfig": "db.r5.4xlarge (mysql 8.0.35) + io1 1500GB", "recommendedConfig": "db.r6g.2xlarge (mysql 8.0.35) + gp3 1500GB", "alternativeConfig": null, "migrationEffort": "Low", "performanceRisk": "Low", "platformDifferences": ["GravitonDB"], "utilizationSummary": "CPU Max 19.8% / FreeableMem 41.2%", "projectedSummary": "Instance $980 + Storage $510 절감", "cpuMax": 19.8, "memoryMax": 41.2, "monthlySavingsUsd": 1490.2, "annualSavingsUsd": 17882.4, "savingsPercentage": 55.4, "actionGuidance": "정기 점검 윈도우에 db.r5.4xlarge → db.r6g.2xlarge 클래스 변경 및 스토리지 gp3 전환 권고", "tags": {"Environment": "Production", "Service": "Member-Core", "Owner": "dba-team"}}, {"id": "prd-legacy-mysql57-core", "arn": "arn:aws:rds:ap-northeast-2:123456789012:db:prd-legacy-mysql57-core", "name": "prd-legacy-mysql57-core", "category": "ExtendedSupport", "serviceLabel": "Extended Support (RDS)", "accountId": "123456789012", "environment": "Production", "owner": "dba-team", "serviceTag": "RDS", "finding": "ExtendedSupport", "reasonCodes": ["VersionEndOfStandardSupport"], "currentConfig": "RDS MySQL (db.r5.2xlarge, 8 vCPU, Multi-AZ) (v5.7.44)", "recommendedConfig": "MySQL 8.0 LTS 업데이트", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "Medium", "performanceRisk": "Low", "platformDifferences": [], "utilizationSummary": "RDS MySQL 5.7 Extended Support 과금 중 — 16 vCPU(Multi-AZ) × $0.10/vCPU-hr 추가 요금 발생", "projectedSummary": "최신 버전 업데이트 시 추가 과금 월 $1,168.00 즉시 제거", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 1168.0, "annualSavingsUsd": 14016.0, "savingsPercentage": 100.0, "actionGuidance": "Blue/Green 배포를 활용해 RDS MySQL 8.0으로 메이저 버전 업그레이드 시 Extended Support 추가 과금($1,168/월) 100% 절감", "tags": {}}, {"id": "vol-0987654321fedcba2", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:volume/vol-0987654321fedcba2", "name": "prd-legacy-log-store", "category": "EBS", "serviceLabel": "Amazon EBS", "accountId": "123456789012", "environment": "Production", "owner": "infra-ops-team", "serviceTag": "Storage", "finding": "NotOptimized", "reasonCodes": ["EBSVolumeTypeOptimization"], "currentConfig": "io1 (1000GB, 10000 IOPS)", "recommendedConfig": "gp3 (1000GB, 4000 IOPS)", "alternativeConfig": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "Read 1400.0 IOPS / Write 980.0 IOPS", "projectedSummary": "gp3 전환 (무중단 ModifyVolume 가능)", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 642.0, "annualSavingsUsd": 7704.0, "savingsPercentage": 84.5, "actionGuidance": "AWS ModifyVolume API로 무중단 io1 → gp3 볼륨 전환", "tags": {"Name": "prd-legacy-log-store", "Environment": "Production", "Owner": "infra-ops-team"}}, {"id": "prd-catalog-aurora-pg-writer", "arn": "arn:aws:rds:ap-northeast-2:123456789012:db:prd-catalog-aurora-pg-writer", "name": "prd-catalog-aurora-pg-writer", "category": "RDS", "serviceLabel": "Amazon RDS / Aurora", "accountId": "123456789012", "environment": "Production", "owner": "catalog-dev-team", "serviceTag": "Catalog", "finding": "Overprovisioned", "reasonCodes": ["CPUOverprovisioned"], "currentConfig": "db.r6g.2xlarge (aurora-postgresql 15.4)", "recommendedConfig": "db.r6g.xlarge (aurora-postgresql 15.4)", "alternativeConfig": null, "migrationEffort": "Low", "performanceRisk": "Low", "platformDifferences": [], "utilizationSummary": "CPU Max 24.1% / FreeableMem 52.0%", "projectedSummary": "Instance $445 + Storage $0 절감", "cpuMax": 24.1, "memoryMax": 52.0, "monthlySavingsUsd": 445.0, "annualSavingsUsd": 5340.0, "savingsPercentage": 50.0, "actionGuidance": "정기 점검 윈도우에 db.r6g.2xlarge → db.r6g.xlarge 클래스 변경 및 스토리지 gp3 전환 권고", "tags": {"Environment": "Production", "Service": "Catalog", "Owner": "catalog-dev-team"}}, {"id": "i-0a1b2c3d4e5f60002", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0a1b2c3d4e5f60002", "name": "prd-payment-batch-worker-01", "category": "EC2", "serviceLabel": "Amazon EC2", "accountId": "123456789012", "environment": "Production", "owner": "fin-settlement-team", "serviceTag": "Payment-Batch", "finding": "Overprovisioned", "reasonCodes": ["CPUOverprovisioned", "NetworkBandwidthOverprovisioned"], "currentConfig": "c5.4xlarge", "recommendedConfig": "c6i.xlarge", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "CPU Max 14.2% / Mem Max 24.8%", "projectedSummary": "CPU 51.0% / Mem 49.6%", "cpuMax": 14.2, "memoryMax": 24.8, "monthlySavingsUsd": 412.5, "annualSavingsUsd": 4950.0, "savingsPercentage": 75.0, "actionGuidance": "c5.4xlarge → c6i.xlarge 리사이징 권고 (동일 아키텍처 내 세대 변경/축소 — 즉시 적용 가능)", "tags": {"Environment": "Production", "Service": "Payment-Batch", "Owner": "fin-settlement-team"}}, {"id": "prd-legacy-eks-cluster-v127", "arn": "arn:aws:eks:ap-northeast-2:123456789012:cluster/prd-legacy-eks-cluster-v127", "name": "prd-legacy-eks-cluster-v127", "category": "ExtendedSupport", "serviceLabel": "Extended Support (EKS)", "accountId": "123456789012", "environment": "Production", "owner": "container-platform-team", "serviceTag": "EKS", "finding": "ExtendedSupport", "reasonCodes": ["VersionEndOfStandardSupport"], "currentConfig": "Amazon EKS (v1.27)", "recommendedConfig": "1.31+ (Standard Support) 업데이트", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "Medium", "performanceRisk": "Low", "platformDifferences": [], "utilizationSummary": "EKS 1.27 표준 지원 종료 — 클러스터당 시간당 $0.50 추가 과금 (총 $0.60/hr vs 표준 $0.10/hr)", "projectedSummary": "최신 버전 업데이트 시 추가 과금 월 $365.00 즉시 제거", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 365.0, "annualSavingsUsd": 4380.0, "savingsPercentage": 83.3, "actionGuidance": "EKS 클러스터 버전을 1.31 이상(Standard Support)으로 인플레이스 업그레이드하여 월 $365.00 추가 요금 제거", "tags": {}}, {"id": "i-0a1b2c3d4e5f60004", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0a1b2c3d4e5f60004", "name": "stg-analytics-etl-01", "category": "EC2", "serviceLabel": "Amazon EC2", "accountId": "123456789012", "environment": "Staging", "owner": "data-eng-team", "serviceTag": "Data-ETL", "finding": "Overprovisioned", "reasonCodes": ["CPUOverprovisioned", "MemoryOverprovisioned"], "currentConfig": "r5.2xlarge", "recommendedConfig": "r7g.large", "alternativeConfig": "r6i.large", "isGravitonRecommendation": true, "compatibilityWarning": "⚠️ Graviton(ARM64) 전환 주의: OS 이미지(AMI), 네이티브 C/C++ 바이너리, Docker 컨테이너 이미지 및 런타임 버전의 ARM64 아키텍처 호환성 사전 검증이 필수입니다.", "migrationEffort": "Medium", "performanceRisk": "VeryLow", "platformDifferences": ["Architecture"], "utilizationSummary": "CPU Max 21.5% / Mem Max 28.0%", "projectedSummary": "CPU 68.4% / Mem 74.2%", "cpuMax": 21.5, "memoryMax": 28.0, "monthlySavingsUsd": 345.8, "annualSavingsUsd": 4149.6, "savingsPercentage": 76.8, "actionGuidance": "r5.2xlarge → r7g.large 리사이징 권고 (Graviton ARM64 아키텍처 전환 — 호환성 검증 필요)", "tags": {"Environment": "Staging", "Service": "Data-ETL", "Owner": "data-eng-team"}}, {"id": "stg-abandoned-qa-db", "arn": "arn:aws:rds:ap-northeast-2:123456789012:db:stg-abandoned-qa-db", "name": "stg-abandoned-qa-db", "category": "Idle", "serviceLabel": "Idle (RDSDBInstance)", "accountId": "123456789012", "environment": "Staging", "owner": "qa-automation-team", "serviceTag": "QA-Test", "finding": "Idle", "reasonCodes": ["Idle", "RDSDBInstance"], "currentConfig": "RDSDBInstance (Active Billing)", "recommendedConfig": "Stop / Snapshot 후 Terminate", "alternativeConfig": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "RDS instance has had 0 active database connections for 14 consecutive days.", "projectedSummary": "즉시 비용 100% 제거 가능", "cpuMax": 2.1, "memoryMax": null, "monthlySavingsUsd": 318.0, "annualSavingsUsd": 3816.0, "savingsPercentage": 100.0, "actionGuidance": "유휴 리소스(RDSDBInstance): 최종 스냅샷/백업 생성 후 중지 또는 삭제 권고", "tags": {"Environment": "Staging", "Service": "QA-Test", "Owner": "qa-automation-team"}}, {"id": "i-0idle998877665544", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0idle998877665544", "name": "dev-old-poc-server-2025", "category": "Idle", "serviceLabel": "Idle (EC2Instance)", "accountId": "123456789012", "environment": "Development", "owner": "ai-lab-team", "serviceTag": "Unused", "finding": "Idle", "reasonCodes": ["Idle", "EC2Instance"], "currentConfig": "EC2Instance (Active Billing)", "recommendedConfig": "Stop / Snapshot 후 Terminate", "alternativeConfig": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "Instance CPU utilization has been consistently < 1% and network I/O < 5MB/day over the past 14 days.", "projectedSummary": "즉시 비용 100% 제거 가능", "cpuMax": 0.6, "memoryMax": null, "monthlySavingsUsd": 284.0, "annualSavingsUsd": 3408.0, "savingsPercentage": 100.0, "actionGuidance": "유휴 리소스(EC2Instance): 최종 스냅샷/백업 생성 후 중지 또는 삭제 권고", "tags": {"Name": "dev-old-poc-server-2025", "Environment": "Development", "Owner": "ai-lab-team"}}, {"id": "notification-dispatcher-svc", "arn": "arn:aws:ecs:ap-northeast-2:123456789012:service/prd-eks-fargate-cluster/notification-dispatcher-svc", "name": "notification-dispatcher-svc", "category": "ECS", "serviceLabel": "Amazon ECS (Fargate)", "accountId": "123456789012", "environment": "Production", "owner": "messaging-team", "serviceTag": "Notification", "finding": "Overprovisioned", "reasonCodes": ["CPUOverprovisioned", "MemoryOverprovisioned"], "currentConfig": "4096 CPU / 8192 MB", "recommendedConfig": "1024 CPU / 2048 MB", "alternativeConfig": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "CPU Max 22.4% / Mem Max 26.8%", "projectedSummary": "Task Definition 리비전 업데이트", "cpuMax": 22.4, "memoryMax": 26.8, "monthlySavingsUsd": 218.4, "annualSavingsUsd": 2620.8, "savingsPercentage": 75.0, "actionGuidance": "ECS Task Definition 스펙을 1024 CPU / 2048 MB로 조정 후 롤링 배포", "tags": {"Environment": "Production", "Service": "Notification", "Owner": "messaging-team"}}, {"id": "i-0a1b2c3d4e5f60001", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0a1b2c3d4e5f60001", "name": "prd-order-api-was-01", "category": "EC2", "serviceLabel": "Amazon EC2", "accountId": "123456789012", "environment": "Production", "owner": "commerce-platform-team", "serviceTag": "Order-API", "finding": "Overprovisioned", "reasonCodes": ["CPUOverprovisioned", "MemoryOverprovisioned"], "currentConfig": "m5.2xlarge", "recommendedConfig": "m7g.xlarge", "alternativeConfig": "m6i.xlarge", "isGravitonRecommendation": true, "compatibilityWarning": "⚠️ Graviton(ARM64) 전환 주의: OS 이미지(AMI), 네이티브 C/C++ 바이너리, Docker 컨테이너 이미지 및 런타임 버전의 ARM64 아키텍처 호환성 사전 검증이 필수입니다.", "migrationEffort": "Medium", "performanceRisk": "VeryLow", "platformDifferences": ["Architecture"], "utilizationSummary": "CPU Max 18.4% / Mem Max 31.2%", "projectedSummary": "CPU 32.1% / Mem 62.4%", "cpuMax": 18.4, "memoryMax": 31.2, "monthlySavingsUsd": 186.4, "annualSavingsUsd": 2236.8, "savingsPercentage": 54.2, "actionGuidance": "m5.2xlarge → m7g.xlarge 리사이징 권고 (Graviton ARM64 아키텍처 전환 — 호환성 검증 필요)", "tags": {"Environment": "Production", "Service": "Order-API", "Owner": "commerce-platform-team"}}, {"id": "prd-image-thumbnail-resizer:$LATEST", "arn": "arn:aws:lambda:ap-northeast-2:123456789012:function:prd-image-thumbnail-resizer:$LATEST", "name": "prd-image-thumbnail-resizer", "category": "Lambda", "serviceLabel": "AWS Lambda", "accountId": "123456789012", "environment": "Production", "owner": "media-team", "serviceTag": "Media-Pipeline", "finding": "NotOptimized", "reasonCodes": ["MemoryOverprovisioned"], "currentConfig": "3008 MB (Timeout 60s)", "recommendedConfig": "1024 MB", "alternativeConfig": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "Max Mem 612.0 MB / Avg Duration 340.5 ms", "projectedSummary": "최근 14일 호출 4,850,000회 기준", "cpuMax": null, "memoryMax": 612.0, "monthlySavingsUsd": 164.8, "annualSavingsUsd": 1977.6, "savingsPercentage": 61.5, "actionGuidance": "Lambda 메모리 설정을 3008MB → 1024MB로 하향 조정", "tags": {"Environment": "Production", "Service": "Media-Pipeline", "Owner": "media-team"}}, {"id": "stg-old-pg11-reporting", "arn": "arn:aws:rds:ap-northeast-2:123456789012:db:stg-old-pg11-reporting", "name": "stg-old-pg11-reporting", "category": "ExtendedSupport", "serviceLabel": "Extended Support (RDS)", "accountId": "123456789012", "environment": "Staging", "owner": "data-eng-team", "serviceTag": "RDS", "finding": "ExtendedSupport", "reasonCodes": ["VersionEndOfStandardSupport"], "currentConfig": "Aurora PostgreSQL (db.r6g.large, 2 vCPU) (v11.21)", "recommendedConfig": "PostgreSQL 15 / 16 업데이트", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "Medium", "performanceRisk": "Low", "platformDifferences": [], "utilizationSummary": "PostgreSQL 11 Extended Support 과금 중 — 2 vCPU × $0.10/vCPU-hr 추가 과금 발생", "projectedSummary": "최신 버전 업데이트 시 추가 과금 월 $146.00 즉시 제거", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 146.0, "annualSavingsUsd": 1752.0, "savingsPercentage": 100.0, "actionGuidance": "Aurora PostgreSQL 15 이상으로 메이저 버전 업그레이드하여 Extended Support 회피", "tags": {}}, {"id": "ebs-snapshots-older-than-90d (총 14개 스냅샷)", "arn": "ebs-snapshots-older-than-90d (총 14개 스냅샷)", "name": "90일 이상 장기 방치된 EBS 스냅샷 묶음 (2,400 GB)", "category": "StorageLifecycle", "serviceLabel": "스냅샷 / 로그 / S3 수명주기", "accountId": "123456789012", "environment": "Production", "owner": "infra-ops-team", "serviceTag": "AgedEBSSnapshot", "finding": "NotOptimized", "reasonCodes": ["AgedEBSSnapshot"], "currentConfig": "EBS Standard Snapshot 14개 (총 2,400 GB · 90~420일 경과)", "recommendedConfig": "불필요 스냅샷 삭제 또는 AWS Data Lifecycle Manager(DLM) 30일 정책 적용", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "90일+ 장기 방치 스냅샷 (2400 GB × ap-northeast-2 (서울) 단가 $0.05/GB-월 = $120.00/월)", "projectedSummary": "ap-northeast-2 (서울) 리전 스토리지 단가 기준 산출", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 120.0, "annualSavingsUsd": 1440.0, "savingsPercentage": 100.0, "actionGuidance": "90일 이상 경과된 수동 EBS 스냅샷 정리 및 DLM 자동 수명주기 정책 설정으로 월 $120.00 절감", "tags": {}}, {"id": "s3://prd-app-access-logs-archive 외 3개 버킷", "arn": "s3://prd-app-access-logs-archive 외 3개 버킷", "name": "S3 Lifecycle(수명주기) 정책 미설정 대용량 버킷 4개", "category": "StorageLifecycle", "serviceLabel": "스냅샷 / 로그 / S3 수명주기", "accountId": "123456789012", "environment": "Production", "owner": "data-eng-team", "serviceTag": "S3NoLifecycle", "finding": "NotOptimized", "reasonCodes": ["S3NoLifecycle"], "currentConfig": "S3 Standard 단일 스토리지 클래스 (Lifecycle 규칙 없음)", "recommendedConfig": "S3 Intelligent-Tiering 또는 30일 후 Glacier Instant Retrieval 전환 정책 추가", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "수명주기(LifecycleConfiguration) 및 미완료 멀티파트 업로드 자동 삭제 규칙이 없는 버킷 4개 감지", "projectedSummary": "ap-northeast-2 (서울) 리전 스토리지 단가 기준 산출", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 94.0, "annualSavingsUsd": 1128.0, "savingsPercentage": 55.0, "actionGuidance": "30일 경과 객체 Glacier 전환 및 7일 경과 Incomplete Multipart Upload 자동 삭제 규칙 설정", "tags": {}}, {"id": "rds-manual-snapshots-older-than-90d (총 3개)", "arn": "rds-manual-snapshots-older-than-90d (총 3개)", "name": "장기 방치된 RDS 수동 스냅샷 묶음 (900 GB)", "category": "StorageLifecycle", "serviceLabel": "스냅샷 / 로그 / S3 수명주기", "accountId": "123456789012", "environment": "Production", "owner": "dba-team", "serviceTag": "AgedRDSSnapshot", "finding": "NotOptimized", "reasonCodes": ["AgedRDSSnapshot"], "currentConfig": "RDS Manual Snapshot 3개 (총 900 GB · 120일 이상 경과)", "recommendedConfig": "수동 스냅샷 정리 또는 S3 Export 후 아카이빙", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "마이그레이션/패치 전 생성 후 삭제하지 않은 수동 DB 스냅샷 3개 ($0.095/GB-월 과금)", "projectedSummary": "ap-northeast-2 (서울) 리전 스토리지 단가 기준 산출", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 85.5, "annualSavingsUsd": 1026.0, "savingsPercentage": 100.0, "actionGuidance": "불필요한 구버전 RDS 수동 스냅샷 3개 삭제 시 백업 스토리지 추가 과금 월 $85.50 즉시 제거", "tags": {}}, {"id": "vol-0987654321fedcba1", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:volume/vol-0987654321fedcba1", "name": "prd-order-db-backup-vol", "category": "EBS", "serviceLabel": "Amazon EBS", "accountId": "123456789012", "environment": "Production", "owner": "commerce-platform-team", "serviceTag": "Storage", "finding": "NotOptimized", "reasonCodes": ["EBSVolumeTypeOptimization"], "currentConfig": "gp2 (2000GB, 6000 IOPS)", "recommendedConfig": "gp3 (2000GB, 3000 IOPS)", "alternativeConfig": null, "migrationEffort": "VeryLow", "performanceRisk": "Low", "platformDifferences": [], "utilizationSummary": "Read 850.0 IOPS / Write 1120.0 IOPS", "projectedSummary": "gp3 전환 (무중단 ModifyVolume 가능)", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 45.6, "annualSavingsUsd": 547.2, "savingsPercentage": 20.0, "actionGuidance": "AWS ModifyVolume API로 무중단 gp2 → gp3 볼륨 전환", "tags": {"Name": "prd-order-db-backup-vol", "Environment": "Production", "Owner": "commerce-platform-team"}}, {"id": "vol-0idle112233445566", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:volume/vol-0idle112233445566", "name": "unattached-snapshot-restore-test", "category": "Idle", "serviceLabel": "Idle (EBSVolume)", "accountId": "123456789012", "environment": "Staging", "owner": "infra-ops-team", "serviceTag": "Unused", "finding": "Unattached", "reasonCodes": ["Unattached", "EBSVolume"], "currentConfig": "EBSVolume (Active Billing)", "recommendedConfig": "Stop / Snapshot 후 Terminate", "alternativeConfig": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "EBS volume (500 GB gp3) has been unattached and had zero read/write IOPS for 14 days.", "projectedSummary": "즉시 비용 100% 제거 가능", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 45.6, "annualSavingsUsd": 547.2, "savingsPercentage": 100.0, "actionGuidance": "유휴 리소스(EBSVolume): 최종 스냅샷/백업 생성 후 중지 또는 삭제 권고", "tags": {"Name": "unattached-snapshot-restore-test", "Environment": "Staging", "Owner": "infra-ops-team"}}, {"id": "nat-09988776655443322 (vpc-0stg1122)", "arn": "nat-09988776655443322 (vpc-0stg1122)", "name": "stg-az2-redundant-nat-gw", "category": "Network", "serviceLabel": "EIP / ALB / NAT 점검", "accountId": "123456789012", "environment": "Staging", "owner": "net-ops-team", "serviceTag": "IdleNATGW", "finding": "Idle", "reasonCodes": ["IdleNATGW"], "currentConfig": "NAT Gateway (Multi-AZ 중복 배치 + S3 Gateway Endpoint 미설치)", "recommendedConfig": "비프로덕션 단일 NAT 통합 + 무료 S3/DynamoDB Gateway Endpoint 추가", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "Low", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "14일간 트래픽 0 Byte 유휴 NAT GW: ap-northeast-2 (서울) 고정비($0.059/hr × 730h = $43.07/월)", "projectedSummary": "ap-northeast-2 (서울) 리전 산식 적용 ($0.059/GB · $0.059/hr × 730 = $43.07/월)", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 43.07, "annualSavingsUsd": 516.84, "savingsPercentage": 100.0, "actionGuidance": "[ap-northeast-2 (서울)] 무료 S3/DynamoDB Gateway VPC Endpoint 생성($0.059/GB 우회) 및 비운영 NAT 통합($0.059/hr × 730h = $43.07/월)", "tags": {}}, {"id": "arn:aws:elasticloadbalancing:ap-northeast-2:123456789012:loadbalancer/app/stg-legacy-admin-alb/50dc6c495c0c9188", "arn": "arn:aws:elasticloadbalancing:ap-northeast-2:123456789012:loadbalancer/app/stg-legacy-admin-alb/50dc6c495c0c9188", "name": "stg-legacy-admin-alb", "category": "Network", "serviceLabel": "EIP / ALB / NAT 점검", "accountId": "123456789012", "environment": "Staging", "owner": "infra-ops-team", "serviceTag": "IdleALB", "finding": "Idle", "reasonCodes": ["IdleALB"], "currentConfig": "Application Load Balancer (Internet-facing)", "recommendedConfig": "ALB 삭제 또는 단일 공유 ALB(Host/Path 라우팅)로 통폐합", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "Low", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "전체 ALB 6개 중 활성 타겟 0개 — ap-northeast-2 (서울) 단가(($0.0243+$0.005)/hr × 730h = $21.39/월)", "projectedSummary": "전체 ALB 6개 중 최적화 대상 2개", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 21.39, "annualSavingsUsd": 256.68, "savingsPercentage": 100.0, "actionGuidance": "연결된 타겟 그룹에 정상 인스턴스가 없는 유휴 ALB: 삭제 시 기본 시간당 요금($16.43+) 및 IPv4 비용 즉시 절감", "tags": {}}, {"id": "arn:aws:elasticloadbalancing:ap-northeast-2:123456789012:loadbalancer/app/dev-Campaign-preview-alb/91ab2c334d5e6f77", "arn": "arn:aws:elasticloadbalancing:ap-northeast-2:123456789012:loadbalancer/app/dev-Campaign-preview-alb/91ab2c334d5e6f77", "name": "dev-campaign-preview-alb", "category": "Network", "serviceLabel": "EIP / ALB / NAT 점검", "accountId": "123456789012", "environment": "Development", "owner": "marketing-dev-team", "serviceTag": "LowTrafficALB", "finding": "Overprovisioned", "reasonCodes": ["LowTrafficALB"], "currentConfig": "독립 ALB 단독 운영 (일 평균 요청 < 50건)", "recommendedConfig": "기존 공용 Ingress/ALB에 Host Header 규칙으로 통합", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "Low", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "리전 내 전체 ALB 6개 점검 결과: 마이크로서비스별 개별 ALB 과다 생성으로 고정비 중복 발생", "projectedSummary": "-", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 18.25, "annualSavingsUsd": 219.0, "savingsPercentage": 75.0, "actionGuidance": "단일 ALB( 또는 EKS ALB Controller `group.name` 공유)로 통합하여 ALB 대수 축소 권고", "tags": {}}, {"id": "/aws/lambda/* 및 /ecs/prd-* (총 9개 로그 그룹)", "arn": "/aws/lambda/* 및 /ecs/prd-* (총 9개 로그 그룹)", "name": "CloudWatch Logs 무기한 보관(Never Expire) 그룹 9개", "category": "StorageLifecycle", "serviceLabel": "스냅샷 / 로그 / S3 수명주기", "accountId": "123456789012", "environment": "Production", "owner": "devops-team", "serviceTag": "CloudWatchLogsNoRetention", "finding": "NotOptimized", "reasonCodes": ["CloudWatchLogsNoRetention"], "currentConfig": "Retention: Never Expire (누적 320 GB 보관 중)", "recommendedConfig": "보관 주기 30일(Production) / 7일(Staging·Dev) 설정", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "만료 미설정 로그 (320 GB × ap-northeast-2 (서울) 단가 $0.03/GB-월)", "projectedSummary": "ap-northeast-2 (서울) 리전 스토리지 단가 기준 산출", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 9.6, "annualSavingsUsd": 115.2, "savingsPercentage": 80.0, "actionGuidance": "`aws logs put-retention-policy`로 보관 주기를 14~30일로 일괄 지정하여 누적 로그 스토리지 비용 절감", "tags": {}}, {"id": "eipalloc-0a112233445566778 (43.201.102.11)", "arn": "eipalloc-0a112233445566778 (43.201.102.11)", "name": "unassigned-nat-eip-01", "category": "Network", "serviceLabel": "EIP / ALB / NAT 점검", "accountId": "123456789012", "environment": "Production", "owner": "net-ops-team", "serviceTag": "UnusedEIP", "finding": "Unattached", "reasonCodes": ["UnusedEIP"], "currentConfig": "Public IPv4 (미연결 EIP: 43.201.102.11)", "recommendedConfig": "EIP 릴리스 (ReleaseAddress)", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "연결된 인스턴스/ENI 없음 — ap-northeast-2 (서울) 단가($0.005/hr × 730h = $3.65/월) 유휴 과금 중", "projectedSummary": "전체 EIP 8개 중 미사용 3개", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 3.65, "annualSavingsUsd": 43.8, "savingsPercentage": 100.0, "actionGuidance": "전체 EIP 8개 중 미사용 3개 감지: 불필요한 공인 IPv4 주소를 즉시 Release하여 유휴 IPv4 요금 제거", "tags": {}}, {"id": "eipalloc-0b998877665544332 (3.38.210.45)", "arn": "eipalloc-0b998877665544332 (3.38.210.45)", "name": "old-bastion-floating-eip", "category": "Network", "serviceLabel": "EIP / ALB / NAT 점검", "accountId": "123456789012", "environment": "Staging", "owner": "sec-platform-team", "serviceTag": "UnusedEIP", "finding": "Unattached", "reasonCodes": ["UnusedEIP"], "currentConfig": "Public IPv4 (미연결 EIP: 3.38.210.45)", "recommendedConfig": "EIP 릴리스 (ReleaseAddress)", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "연결된 인스턴스/ENI 없음 — ap-northeast-2 (서울) 단가($0.005/hr × 730h = $3.65/월) 유휴 과금 중", "projectedSummary": "전체 EIP 8개 중 미사용 3개", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 3.65, "annualSavingsUsd": 43.8, "savingsPercentage": 100.0, "actionGuidance": "DNS 레코드 참조 여부 확인 후 `aws ec2 release-address`로 즉시 반환 권고", "tags": {}}, {"id": "eipalloc-0c554433221100998 (13.125.88.190)", "arn": "eipalloc-0c554433221100998 (13.125.88.190)", "name": "dev-temp-webhook-eip", "category": "Network", "serviceLabel": "EIP / ALB / NAT 점검", "accountId": "123456789012", "environment": "Development", "owner": "commerce-platform-team", "serviceTag": "UnusedEIP", "finding": "Unattached", "reasonCodes": ["UnusedEIP"], "currentConfig": "Public IPv4 (미연결 EIP: 13.125.88.190)", "recommendedConfig": "EIP 릴리스 (ReleaseAddress)", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "VeryLow", "platformDifferences": [], "utilizationSummary": "연결된 인스턴스/ENI 없음 — ap-northeast-2 (서울) 단가($0.005/hr × 730h = $3.65/월) 유휴 과금 중", "projectedSummary": "전체 EIP 8개 중 미사용 3개", "cpuMax": null, "memoryMax": null, "monthlySavingsUsd": 3.65, "annualSavingsUsd": 43.8, "savingsPercentage": 100.0, "actionGuidance": "미연결 EIP 즉시 반환 (월 $3.65 절감)", "tags": {}}, {"id": "i-0a1b2c3d4e5f60003", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0a1b2c3d4e5f60003", "name": "prd-search-indexer-node-02", "category": "EC2", "serviceLabel": "Amazon EC2", "accountId": "123456789012", "environment": "Production", "owner": "search-ai-team", "serviceTag": "Search-Engine", "finding": "Underprovisioned", "reasonCodes": ["MemoryUnderprovisioned", "CPUUnderprovisioned"], "currentConfig": "r5.large", "recommendedConfig": "r6i.xlarge", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "High", "platformDifferences": [], "utilizationSummary": "CPU Max 94.6% / Mem Max 92.1%", "projectedSummary": "CPU 45.2% / Mem 46.0%", "cpuMax": 94.6, "memoryMax": 92.1, "monthlySavingsUsd": 0.0, "annualSavingsUsd": 0.0, "savingsPercentage": 0.0, "actionGuidance": "성능 병목 위험(CPU 94.6% / Mem 92.1%): r6i.xlarge로 스케일업 권고", "tags": {"Environment": "Production", "Service": "Search-Engine", "Owner": "search-ai-team"}}, {"id": "i-0a1b2c3d4e5f60005", "arn": "arn:aws:ec2:ap-northeast-2:123456789012:instance/i-0a1b2c3d4e5f60005", "name": "prd-auth-gateway-01", "category": "EC2", "serviceLabel": "Amazon EC2", "accountId": "123456789012", "environment": "Production", "owner": "sec-platform-team", "serviceTag": "Auth-Gateway", "finding": "Optimized", "reasonCodes": [], "currentConfig": "m6i.large", "recommendedConfig": "m6i.large", "alternativeConfig": null, "isGravitonRecommendation": false, "compatibilityWarning": null, "migrationEffort": "VeryLow", "performanceRisk": "Low", "platformDifferences": [], "utilizationSummary": "CPU Max 64.2% / Mem Max 58.9%", "projectedSummary": "현재 적정 사양 유지", "cpuMax": 64.2, "memoryMax": 58.9, "monthlySavingsUsd": 0.0, "annualSavingsUsd": 0.0, "savingsPercentage": 0.0, "actionGuidance": "✅ 현재 스펙 적정 상태 (추가 리사이징 불필요)", "tags": {"Environment": "Production", "Service": "Auth-Gateway", "Owner": "sec-platform-team"}}]};
  window.CLOUDSHELL_SCRIPT = "# [AWS CloudShell 안전 점검 스크립트 - 리전 자동 감지 & 100% Read-Only (조회 전용)]\n# Compute Optimizer(가입 상태 감지 + 페이지네이션) + Extended Support + EIP/ALB/NAT + 노후 스냅샷/로그/S3 + Cost Explorer 통합 수집\nREGION=\"${AWS_REGION:-${AWS_DEFAULT_REGION:-$(aws configure get region 2>/dev/null || echo ap-northeast-2)}}\"\nexport REGION\nACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)\n\necho \"🔍 AWS FinOps 통합 최적화 데이터 수집 중 (Account: $ACCOUNT_ID, Auto-Detected Region: $REGION)...\"\n\npython3 - << 'EOF'\nimport json, datetime, os\nimport boto3\nfrom botocore.config import Config\n\nregion = os.environ.get(\"REGION\") or os.environ.get(\"AWS_REGION\") or os.environ.get(\"AWS_DEFAULT_REGION\") or \"ap-northeast-2\"\ncfg = Config(retries={\"max_attempts\": 2, \"mode\": \"standard\"}, connect_timeout=8, read_timeout=15)\nsession = boto3.Session(region_name=region)\n\nsts = session.client(\"sts\", config=cfg)\naccount_id = sts.get_caller_identity().get(\"Account\", \"Unknown\")\nnow_utc = datetime.datetime.now(datetime.timezone.utc)\n\n# 0. Compute Optimizer 가입 여부(Enrollment Status) 확인 및 페이지네이션 수집\nco = session.client(\"compute-optimizer\", region_name=region, config=cfg)\nco_status = \"Active\"\nco_note = \"Compute Optimizer 정상 활성화됨 (최근 14일 메트릭 분석)\"\ntry:\n    en = co.get_enrollment_status()\n    co_status = en.get(\"status\", \"Inactive\")\n    if co_status != \"Active\":\n        co_note = f\"⚠️ Compute Optimizer 미가입({co_status}) 상태입니다. 활성화 후 14일 뒤 정밀 라이트사이징 조회가 가능합니다.\"\nexcept Exception as e:\n    co_status = \"Inactive\"\n    co_note = \"⚠️ Compute Optimizer 미가입(Opt-Out) 상태입니다. 콘솔에서 켠 뒤 14일 후 재진단해 주세요.\"\n\ndef paginate_co(method_name, key):\n    items = []\n    if co_status != \"Active\":\n        return items\n    try:\n        fn = getattr(co, method_name)\n        token = None\n        while True:\n            kw = {\"maxResults\": 100}\n            if token: kw[\"nextToken\"] = token\n            resp = fn(**kw)\n            items.extend(resp.get(key, []))\n            token = resp.get(\"nextToken\")\n            if not token or len(items) >= 500:\n                break\n    except Exception:\n        pass\n    return items\n\n# 1. Extended Support & Version Upgrade (EKS describe_cluster_versions & RDS describe_db_engine_versions 실시간 동기화)\next_items = []\ntry:\n    eks = session.client(\"eks\", region_name=region, config=cfg)\n    ver_status_map = {}\n    standard_vers = []\n    default_eks_ver = \"\"\n    try:\n        if hasattr(eks, \"describe_cluster_versions\"):\n            for cv in eks.describe_cluster_versions().get(\"clusterVersions\", []):\n                v_str = str(cv.get(\"clusterVersion\", \"\"))\n                st_str = str(cv.get(\"status\", \"STANDARD_SUPPORT\")).upper()\n                ver_status_map[v_str] = st_str\n                if cv.get(\"defaultVersion\"):\n                    default_eks_ver = v_str\n                if \"STANDARD\" in st_str:\n                    try: standard_vers.append(float(v_str))\n                    except Exception: pass\n    except Exception:\n        pass\n    if not standard_vers:\n        try:\n            addons = eks.describe_addon_versions(addonName=\"vpc-cni\").get(\"addons\", [])\n            all_k8s = sorted({float(c[\"kubernetesVersion\"]) for a in addons for av in a.get(\"addonVersions\", []) for c in av.get(\"compatibilities\", []) if c.get(\"kubernetesVersion\")})\n            if all_k8s: standard_vers = all_k8s[-3:]\n        except Exception:\n            standard_vers = [1.32, 1.33]\n    latest_eks_num = max(standard_vers) if standard_vers else 1.33\n    min_standard_eks_num = min(standard_vers) if standard_vers else 1.32\n    latest_eks_str = f\"{latest_eks_num:.2f}\"\n    rec_eks_label = f\"EKS v{default_eks_ver or latest_eks_str} (AWS 최신 표준 지원 버전)\"\n\n    for cname in eks.list_clusters().get(\"clusters\", []):\n        c = eks.describe_cluster(name=cname).get(\"cluster\", {})\n        ver = str(c.get(\"version\", \"99\"))\n        tags = c.get(\"tags\", {})\n        try:\n            ver_num = float(ver)\n            live_st = ver_status_map.get(ver, \"\")\n            is_ext = (\"EXTENDED\" in live_st) or (ver_num < min_standard_eks_num)\n            is_behind = ver_num < latest_eks_num\n            if is_ext or is_behind:\n                ext_items.append({\n                    \"resourceArn\": c.get(\"arn\", cname), \"resourceId\": f\"eks-cluster/{cname}\", \"resourceName\": cname,\n                    \"serviceType\": \"EKS\", \"engineOrPlatform\": \"Amazon EKS Kubernetes\", \"currentVersion\": ver,\n                    \"recommendedVersion\": rec_eks_label, \"finding\": \"ExtendedSupport\" if is_ext else \"NotOptimized\",\n                    \"statusDetail\": f\"EKS Kubernetes v{ver} [AWS API 상태: {live_st or ('EXTENDED_SUPPORT' if is_ext else '구버전')}] — 최신 표준 v{latest_eks_str} 대비 업데이트 필요\",\n                    \"monthlySurchargeUsd\": 365.00 if is_ext else 0.0, \"savingsPercentage\": 83.3 if is_ext else 0.0,\n                    \"environment\": tags.get(\"Environment\", \"Production\"), \"owner\": tags.get(\"Owner\", \"Platform / DevOps\"),\n                    \"actionGuidance\": f\"EKS 클러스터({cname})를 {rec_eks_label}으로 인플레이스 업데이트하여 Extended Support 추가 과금(월 $365) 제거 및 최신 보안 패치 유지\"\n                })\n        except Exception:\n            pass\nexcept Exception:\n    pass\n\nvcpu_map = {\"micro\":2,\"small\":2,\"medium\":2,\"large\":2,\"xlarge\":4,\"2xlarge\":8,\"4xlarge\":16,\"8xlarge\":32,\"12xlarge\":48,\"16xlarge\":64}\ntry:\n    rds = session.client(\"rds\", region_name=region, config=cfg)\n    eng_def_cache = {}\n    for db in rds.describe_db_instances().get(\"DBInstances\", []):\n        eng = str(db.get(\"Engine\", \"\")).lower()\n        ver = str(db.get(\"EngineVersion\", \"\"))\n        cls = str(db.get(\"DBInstanceClass\", \"db.m5.large\"))\n        maz = bool(db.get(\"MultiAZ\", False))\n        tag_list = db.get(\"TagList\", [])\n        env_val = next((t.get(\"Value\") for t in tag_list if t.get(\"Key\", \"\").lower() == \"environment\"), \"Production\")\n        own_val = next((t.get(\"Value\") for t in tag_list if t.get(\"Key\", \"\").lower() == \"owner\"), \"-\")\n        if eng and eng not in eng_def_cache:\n            try:\n                dvs = rds.describe_db_engine_versions(Engine=eng, DefaultOnly=True).get(\"DBEngineVersions\", [])\n                eng_def_cache[eng] = str(dvs[0].get(\"EngineVersion\", \"\")) if dvs else \"\"\n            except Exception:\n                eng_def_cache[eng] = \"\"\n        aws_def_ver = eng_def_cache.get(eng, \"\")\n        latest_maj_target = \"\"\n        is_dep = False\n        try:\n            evi = rds.describe_db_engine_versions(Engine=eng, EngineVersion=ver, IncludeAll=True).get(\"DBEngineVersions\", [])\n            if evi:\n                if str(evi[0].get(\"Status\", \"\")).lower() != \"available\": is_dep = True\n                mts = [u.get(\"EngineVersion\", \"\") for u in evi[0].get(\"ValidUpgradeTarget\", []) if u.get(\"IsMajorVersionUpgrade\")]\n                if mts: latest_maj_target = mts[-1]\n        except Exception:\n            pass\n        cur_maj = ver.split(\".\")[0] if \".\" in ver else ver\n        def_maj = aws_def_ver.split(\".\")[0] if \".\" in aws_def_ver else aws_def_ver\n        is_old_maj = bool(def_maj and cur_maj.isdigit() and def_maj.isdigit() and int(cur_maj) < int(def_maj))\n        is_leg_ext = (\"mysql\" in eng and ver.startswith(\"5.7\")) or (\"postgres\" in eng and (ver.startswith(\"11.\") or ver.startswith(\"12.\")))\n        if is_dep or is_old_maj or is_leg_ext:\n            vcpus = vcpu_map.get(cls.split(\".\")[-1], 4) * (2 if maz else 1)\n            surcharge = round(vcpus * 0.10 * 730, 2)\n            db_id = db.get(\"DBInstanceIdentifier\", \"\")\n            rec_rds_v = latest_maj_target or aws_def_ver or \"AWS 최신 표준 엔진 버전\"\n            ext_items.append({\n                \"resourceArn\": db.get(\"DBInstanceArn\", db_id), \"resourceId\": db_id, \"resourceName\": db_id,\n                \"serviceType\": \"RDS\", \"engineOrPlatform\": f\"{eng} ({cls})\", \"currentVersion\": ver,\n                \"recommendedVersion\": f\"{eng} {rec_rds_v} (AWS 표준 권장 버전)\", \"finding\": \"ExtendedSupport\",\n                \"statusDetail\": f\"{eng} {ver} 구버전/Extended Support 과금 대상 (AWS 현재 권장 기본 버전: {aws_def_ver or rec_rds_v}, {vcpus} vCPU)\",\n                \"monthlySurchargeUsd\": surcharge, \"savingsPercentage\": 100.0,\n                \"environment\": env_val, \"owner\": own_val,\n                \"actionGuidance\": f\"Blue/Green 배포로 {db_id} 엔진을 AWS 표준 권장 버전({rec_rds_v})으로 업그레이드하여 Extended Support 추가 과금(월 ${surcharge:,.2f}) 제거\"\n            })\nexcept Exception:\n    pass\n\n# 2. Regional Pricing Lookup (리전별 공식 단가 테이블 + AWS Price List API 실시간 동기화) & Network Audit\nreg_price_table = {\n    \"ap-northeast-2\": {\"label\": \"ap-northeast-2 (서울)\", \"nat_hr\": 0.059, \"nat_gb\": 0.059, \"alb_hr\": 0.0243, \"ebs_snap\": 0.05, \"cw_log\": 0.03},\n    \"ap-south-1\": {\"label\": \"ap-south-1 (뭄바이)\", \"nat_hr\": 0.056, \"nat_gb\": 0.056, \"alb_hr\": 0.0243, \"ebs_snap\": 0.05, \"cw_log\": 0.03},\n    \"ap-south-2\": {\"label\": \"ap-south-2 (하이데라바드)\", \"nat_hr\": 0.056, \"nat_gb\": 0.056, \"alb_hr\": 0.0243, \"ebs_snap\": 0.05, \"cw_log\": 0.03},\n    \"ap-northeast-1\": {\"label\": \"ap-northeast-1 (도쿄)\", \"nat_hr\": 0.062, \"nat_gb\": 0.062, \"alb_hr\": 0.0243, \"ebs_snap\": 0.05, \"cw_log\": 0.03},\n    \"ap-northeast-3\": {\"label\": \"ap-northeast-3 (오사카)\", \"nat_hr\": 0.062, \"nat_gb\": 0.062, \"alb_hr\": 0.0243, \"ebs_snap\": 0.05, \"cw_log\": 0.03},\n    \"ap-southeast-1\": {\"label\": \"ap-southeast-1 (싱가포르)\", \"nat_hr\": 0.059, \"nat_gb\": 0.059, \"alb_hr\": 0.0252, \"ebs_snap\": 0.05, \"cw_log\": 0.03},\n    \"ap-southeast-2\": {\"label\": \"ap-southeast-2 (시드니)\", \"nat_hr\": 0.059, \"nat_gb\": 0.059, \"alb_hr\": 0.0252, \"ebs_snap\": 0.055, \"cw_log\": 0.033},\n    \"us-east-1\": {\"label\": \"us-east-1 (버지니아)\", \"nat_hr\": 0.045, \"nat_gb\": 0.045, \"alb_hr\": 0.0225, \"ebs_snap\": 0.05, \"cw_log\": 0.03},\n    \"us-east-2\": {\"label\": \"us-east-2 (오하이오)\", \"nat_hr\": 0.045, \"nat_gb\": 0.045, \"alb_hr\": 0.0225, \"ebs_snap\": 0.05, \"cw_log\": 0.03},\n    \"us-west-1\": {\"label\": \"us-west-1 (캘리포니아)\", \"nat_hr\": 0.048, \"nat_gb\": 0.048, \"alb_hr\": 0.027, \"ebs_snap\": 0.055, \"cw_log\": 0.033},\n    \"us-west-2\": {\"label\": \"us-west-2 (오레곤)\", \"nat_hr\": 0.045, \"nat_gb\": 0.045, \"alb_hr\": 0.0225, \"ebs_snap\": 0.05, \"cw_log\": 0.03},\n    \"eu-west-1\": {\"label\": \"eu-west-1 (아일랜드)\", \"nat_hr\": 0.048, \"nat_gb\": 0.048, \"alb_hr\": 0.0252, \"ebs_snap\": 0.05, \"cw_log\": 0.03},\n    \"eu-central-1\": {\"label\": \"eu-central-1 (프랑크푸르트)\", \"nat_hr\": 0.048, \"nat_gb\": 0.048, \"alb_hr\": 0.0252, \"ebs_snap\": 0.05, \"cw_log\": 0.03},\n    \"sa-east-1\": {\"label\": \"sa-east-1 (상파울루)\", \"nat_hr\": 0.093, \"nat_gb\": 0.093, \"alb_hr\": 0.036, \"ebs_snap\": 0.068, \"cw_log\": 0.045},\n}\nrp = dict(reg_price_table.get(region.lower(), {\"label\": region, \"nat_hr\": 0.059, \"nat_gb\": 0.059, \"alb_hr\": 0.0243, \"ebs_snap\": 0.05, \"cw_log\": 0.03}))\ntry:\n    pr_client = session.client(\"pricing\", region_name=\"us-east-1\", config=cfg)\n    pr_resp = pr_client.get_products(\n        ServiceCode=\"AmazonEC2\",\n        Filters=[\n            {\"Type\": \"TERM_MATCH\", \"Field\": \"regionCode\", \"Value\": region.lower()},\n            {\"Type\": \"TERM_MATCH\", \"Field\": \"productFamily\", \"Value\": \"NAT Gateway\"},\n        ],\n        MaxResults=10,\n    )\n    for p_str in pr_resp.get(\"PriceList\", []):\n        p_obj = json.loads(p_str)\n        ut = str(p_obj.get(\"product\", {}).get(\"attributes\", {}).get(\"usagetype\", \"\"))\n        for tv in p_obj.get(\"terms\", {}).get(\"OnDemand\", {}).values():\n            for dim in tv.get(\"priceDimensions\", {}).values():\n                uv = float(dim.get(\"pricePerUnit\", {}).get(\"USD\", \"0\") or 0)\n                if uv > 0:\n                    if \"NatGateway-Hours\" in ut: rp[\"nat_hr\"] = uv\n                    elif \"NatGateway-Bytes\" in ut: rp[\"nat_gb\"] = uv\nexcept Exception:\n    pass\n\nnat_mo_usd = round(rp[\"nat_hr\"] * 730, 2)\nalb_mo_usd = round((rp[\"alb_hr\"] + 0.005) * 730, 2)\n\nec2 = session.client(\"ec2\", region_name=region, config=cfg)\nnet_items = []\naddrs = []\nunattached_eip = 0\ntry:\n    addrs = ec2.describe_addresses().get(\"Addresses\", [])\n    for a in addrs:\n        if not a.get(\"AssociationId\"):\n            unattached_eip += 1\n            alloc = a.get(\"AllocationId\", \"eip\")\n            pip = a.get(\"PublicIp\", \"\")\n            tlist = a.get(\"Tags\", [])\n            name_t = next((t.get(\"Value\") for t in tlist if t.get(\"Key\") == \"Name\"), alloc)\n            net_items.append({\n                \"resourceId\": f\"{alloc} ({pip})\", \"resourceName\": name_t, \"subType\": \"UnusedEIP\",\n                \"finding\": \"Unattached\", \"currentConfig\": f\"Public IPv4 (미연결 EIP: {pip})\",\n                \"recommendedConfig\": \"EIP 릴리스 (ReleaseAddress)\",\n                \"utilizationDetail\": f\"연결된 인스턴스/ENI 없음 ({rp['label']} 단가 $0.005/hr × 730h = $3.65/월)\",\n                \"monthlySavingsUsd\": 3.65, \"environment\": \"-\", \"owner\": \"-\"\n            })\nexcept Exception:\n    pass\n\nalbs = []\nidle_alb = 0\ntry:\n    elbv2 = session.client(\"elbv2\", region_name=region, config=cfg)\n    lbs = elbv2.describe_load_balancers().get(\"LoadBalancers\", [])\n    albs = [lb for lb in lbs if lb.get(\"Type\") == \"application\"]\n    for alb in albs:\n        lbarn = alb.get(\"LoadBalancerArn\", \"\")\n        lbname = alb.get(\"LoadBalancerName\", \"\")\n        tgs = elbv2.describe_target_groups(LoadBalancerArn=lbarn).get(\"TargetGroups\", [])\n        healthy_cnt = 0\n        for tg in tgs:\n            th = elbv2.describe_target_health(TargetGroupArn=tg[\"TargetGroupArn\"]).get(\"TargetHealthDescriptions\", [])\n            healthy_cnt += len(th)\n        if len(tgs) == 0 or healthy_cnt == 0:\n            idle_alb += 1\n            net_items.append({\n                \"resourceId\": lbarn, \"resourceName\": lbname, \"subType\": \"IdleALB\",\n                \"finding\": \"Idle\", \"currentConfig\": \"Application Load Balancer\",\n                \"recommendedConfig\": \"유휴 ALB 삭제 또는 단일 공유 ALB 통합\",\n                \"utilizationDetail\": f\"전체 ALB {len(albs)}개 중 활성 타겟 0개 ({rp['label']} 단가 ${alb_mo_usd}/월)\",\n                \"monthlySavingsUsd\": alb_mo_usd, \"environment\": \"-\", \"owner\": \"-\"\n            })\nexcept Exception:\n    pass\n\nnat_gws = []\nidle_nat = 0\ntry:\n    cw = session.client(\"cloudwatch\", region_name=region, config=cfg)\n    nat_gws = [n for n in ec2.describe_nat_gateways().get(\"NatGateways\", []) if n.get(\"State\") == \"available\"]\n    vpcs_with_s3_ep = set()\n    for ep in ec2.describe_vpc_endpoints().get(\"VpcEndpoints\", []):\n        if \"s3\" in str(ep.get(\"ServiceName\", \"\")).lower():\n            vpcs_with_s3_ep.add(ep.get(\"VpcId\"))\n    for n in nat_gws:\n        nid = n.get(\"NatGatewayId\", \"\")\n        vpc_id = n.get(\"VpcId\", \"\")\n        nat_bytes_14d = -1.0\n        try:\n            m_resp = cw.get_metric_statistics(\n                Namespace=\"AWS/NATGateway\",\n                MetricName=\"BytesOutToDestination\",\n                Dimensions=[{\"Name\": \"NatGatewayId\", \"Value\": nid}],\n                StartTime=now_utc - datetime.timedelta(days=14),\n                EndTime=now_utc,\n                Period=86400 * 14,\n                Statistics=[\"Sum\"]\n            )\n            pts = m_resp.get(\"Datapoints\", [])\n            nat_bytes_14d = sum(float(p.get(\"Sum\", 0.0)) for p in pts) if pts else 0.0\n        except Exception:\n            pass\n\n        if nat_bytes_14d == 0.0:\n            idle_nat += 1\n            net_items.append({\n                \"resourceId\": f\"{nid} ({vpc_id})\", \"resourceName\": nid, \"subType\": \"IdleNATGW\",\n                \"finding\": \"Idle\", \"currentConfig\": f\"NAT Gateway ({vpc_id}, 14일간 아웃바운드 트래픽 0 Byte)\",\n                \"recommendedConfig\": \"미사용 유휴 NAT Gateway 삭제\",\n                \"utilizationDetail\": f\"CloudWatch 14일 트래픽 0 Byte ({rp['label']} 고정비 ${rp['nat_hr']}/hr × 730h = ${nat_mo_usd}/월)\",\n                \"monthlySavingsUsd\": nat_mo_usd, \"environment\": \"-\", \"owner\": \"-\",\n                \"actionGuidance\": f\"[{rp['label']}] 14일간 트래픽이 없는 유휴 NAT Gateway({nid}) 삭제 시 월 고정비 ${nat_mo_usd} 즉시 절감\"\n            })\n        elif vpc_id and vpc_id not in vpcs_with_s3_ep:\n            idle_nat += 1\n            gb_str = f\" (14일 트래픽 약 {nat_bytes_14d / (1024**3):.2f} GB)\" if nat_bytes_14d > 0 else \"\"\n            net_items.append({\n                \"resourceId\": f\"{nid} ({vpc_id})\", \"resourceName\": nid, \"subType\": \"IdleNATGW\",\n                \"finding\": \"NotOptimized\", \"currentConfig\": f\"NAT Gateway ({vpc_id} 내 S3 Gateway Endpoint 미설치)\",\n                \"recommendedConfig\": \"무료 S3/DynamoDB Gateway VPC Endpoint 생성 및 비운영 NAT 통합\",\n                \"utilizationDetail\": f\"전체 NAT GW {len(nat_gws)}개 점검{gb_str}: {rp['label']} 단가(${rp['nat_hr']}/hr · ${rp['nat_gb']}/GB × 730 = ${nat_mo_usd}/월)\",\n                \"monthlySavingsUsd\": nat_mo_usd, \"environment\": \"-\", \"owner\": \"-\",\n                \"actionGuidance\": f\"[{rp['label']}] 무료 S3/DynamoDB Gateway VPC Endpoint 생성(${rp['nat_gb']}/GB 우회) 및 비운영 NAT 통합(월 ${nat_mo_usd})\"\n            })\nexcept Exception:\n    pass\n\n# 3. Storage & Log Lifecycle Audit (90d+ EBS/RDS Snapshots, Never-Expire CloudWatch Logs, S3 No Lifecycle)\nstg_items = []\naged_ebs_cnt, aged_ebs_gb = 0, 0\ntry:\n    for snap in ec2.describe_snapshots(OwnerIds=[\"self\"]).get(\"Snapshots\", []):\n        st = snap.get(\"StartTime\")\n        if st and (now_utc - st).days >= 90:\n            aged_ebs_cnt += 1\n            aged_ebs_gb += int(snap.get(\"VolumeSize\", 0))\n    if aged_ebs_cnt > 0:\n        sav = round(aged_ebs_gb * rp[\"ebs_snap\"], 2)\n        stg_items.append({\n            \"resourceId\": f\"ebs-snapshots-90d+ ({aged_ebs_cnt}개)\",\n            \"resourceName\": f\"90일 이상 경과된 노후 EBS 스냅샷 {aged_ebs_cnt}개 ({aged_ebs_gb} GB)\",\n            \"subType\": \"AgedEBSSnapshot\", \"finding\": \"NotOptimized\",\n            \"currentConfig\": f\"EBS Snapshot {aged_ebs_cnt}개 (총 {aged_ebs_gb} GB)\",\n            \"recommendedConfig\": \"불필요 스냅샷 삭제 및 DLM 수명주기 적용\",\n            \"utilizationDetail\": f\"생성 후 90일 이상 경과된 장기 방치 스냅샷 ({rp['label']} 단가 ${rp['ebs_snap']}/GB-월)\",\n            \"monthlySavingsUsd\": sav, \"savingsPercentage\": 100.0, \"environment\": \"-\", \"owner\": \"-\"\n        })\nexcept Exception:\n    pass\n\nnever_log_cnt, never_log_gb = 0, 0.0\ntry:\n    logs_client = session.client(\"logs\", region_name=region, config=cfg)\n    for lg in logs_client.describe_log_groups(limit=50).get(\"logGroups\", []):\n        if \"retentionInDays\" not in lg:\n            never_log_cnt += 1\n            never_log_gb += float(lg.get(\"storedBytes\", 0)) / (1024**3)\n    if never_log_cnt > 0:\n        never_log_gb = round(never_log_gb, 2)\n        sav = round(max(never_log_gb * rp[\"cw_log\"], 5.0), 2)\n        stg_items.append({\n            \"resourceId\": f\"cw-logs-no-retention ({never_log_cnt}개)\",\n            \"resourceName\": f\"CloudWatch Logs 무기한 보관(Never Expire) 그룹 {never_log_cnt}개\",\n            \"subType\": \"CloudWatchLogsNoRetention\", \"finding\": \"NotOptimized\",\n            \"currentConfig\": f\"Retention 미설정 ({never_log_cnt}개 그룹 · {never_log_gb} GB)\",\n            \"recommendedConfig\": \"보관 주기 14일~30일 설정\",\n            \"utilizationDetail\": f\"만료 기간 없이 영구 누적 과금 중인 로그 그룹 ({rp['label']} 단가 ${rp['cw_log']}/GB-월)\",\n            \"monthlySavingsUsd\": sav, \"savingsPercentage\": 80.0, \"environment\": \"-\", \"owner\": \"-\"\n        })\nexcept Exception:\n    pass\n\n# 4. Cost Explorer (최근 30일 총 청구액 조회)\nce_summary = {\"lastMonthTotalUsd\": 0.0, \"billingPeriod\": \"최근 30일 청구 기준\"}\ntry:\n    ce = session.client(\"ce\", region_name=\"us-east-1\", config=cfg)\n    end_d = now_utc.date()\n    start_d = end_d - datetime.timedelta(days=30)\n    res_ce = ce.get_cost_and_usage(\n        TimePeriod={\"Start\": start_d.isoformat(), \"End\": end_d.isoformat()},\n        Granularity=\"MONTHLY\", Metrics=[\"UnblendedCost\"]\n    )\n    total_bill = sum(float(r[\"Total\"][\"UnblendedCost\"][\"Amount\"]) for r in res_ce.get(\"ResultsByTime\", []))\n    ce_summary[\"lastMonthTotalUsd\"] = round(total_bill, 2)\nexcept Exception:\n    pass\n\n# 5. AWS Invoicing API (실제 청구서 적용 환율 USD->KRW) 조회\nfx_info = {\"rate\": 1384.50, \"source\": \"AWS Invoice 기준환율\", \"mode\": \"aws_invoice\"}\ntry:\n    inv = session.client(\"invoicing\", region_name=\"us-east-1\", config=cfg)\n    yr, mo = now_utc.year, now_utc.month - 1\n    if mo <= 0:\n        mo = 12\n        yr -= 1\n    inv_res = inv.list_invoice_summaries(\n        Selector={\"ResourceType\": \"ACCOUNT_ID\", \"Value\": account_id},\n        Filter={\"BillingPeriod\": {\"Year\": yr, \"Month\": mo}}\n    )\n    for s in inv_res.get(\"InvoiceSummaries\", []):\n        for k in (\"PaymentCurrencyAmount\", \"BaseCurrencyAmount\"):\n            fx = (s.get(k) or {}).get(\"CurrencyExchangeDetails\") or {}\n            if fx.get(\"Rate\") and float(fx[\"Rate\"]) > 900:\n                fx_info = {\n                    \"rate\": round(float(fx[\"Rate\"]), 2),\n                    \"source\": f\"AWS Invoice ({yr}-{mo:02d} 청구서 확정 환율)\",\n                    \"mode\": \"aws_invoice\",\n                    \"invoiceId\": s.get(\"InvoiceId\"),\n                    \"billingPeriod\": f\"{yr}-{mo:02d}\"\n                }\n                break\nexcept Exception:\n    pass\n\nsnapshot = {\n    \"metadata\": {\n        \"accountId\": account_id,\n        \"accountAlias\": f\"cloudshell-{account_id}\",\n        \"region\": region,\n        \"collectedAt\": now_utc.isoformat(),\n        \"sourceMode\": \"cloudshell_snapshot\",\n        \"lookBackPeriodInDays\": 14,\n        \"computeOptimizerStatus\": co_status,\n        \"computeOptimizerNote\": co_note\n    },\n    \"exchangeRateInfo\": fx_info,\n    \"costExplorer\": ce_summary,\n    \"ec2\": paginate_co(\"get_ec2_instance_recommendations\", \"instanceRecommendations\"),\n    \"ebs\": paginate_co(\"get_ebs_volume_recommendations\", \"volumeRecommendations\"),\n    \"rds\": paginate_co(\"get_rds_database_recommendations\", \"rdsDBRecommendations\"),\n    \"ecs\": paginate_co(\"get_ecs_service_recommendations\", \"ecsServiceRecommendations\"),\n    \"lambda\": paginate_co(\"get_lambda_function_recommendations\", \"lambdaFunctionRecommendations\"),\n    \"idle\": paginate_co(\"get_idle_recommendations\", \"idleRecommendations\"),\n    \"extendedSupport\": ext_items,\n    \"networkAudit\": {\n        \"summary\": {\n            \"totalEipCount\": len(addrs),\n            \"unattachedEipCount\": unattached_eip,\n            \"totalAlbCount\": len(albs),\n            \"idleOrNoTargetAlbCount\": idle_alb,\n            \"totalNatGwCount\": len(nat_gws),\n            \"idleOrRedundantNatGwCount\": idle_nat\n        },\n        \"items\": net_items\n    },\n    \"storageLifecycleAudit\": {\n        \"summary\": {\n            \"agedEbsSnapshotCount\": aged_ebs_cnt,\n            \"agedEbsSnapshotTotalGb\": aged_ebs_gb,\n            \"agedRdsSnapshotCount\": 0,\n            \"agedRdsSnapshotTotalGb\": 0,\n            \"neverExpireLogGroupCount\": never_log_cnt,\n            \"neverExpireLogTotalGb\": never_log_gb,\n            \"s3NoLifecycleBucketCount\": 0\n        },\n        \"items\": stg_items\n    }\n}\n\nfilename = f\"compute_optimizer_snapshot_{account_id}_{region}.json\"\nwith open(filename, \"w\", encoding=\"utf-8\") as f:\n    json.dump(snapshot, f, ensure_ascii=False, indent=2, default=str)\n\nprint(f\"✅ 통합 수집 완료! (리전: {region}, Compute Optimizer 상태: {co_status})\")\nprint(f\"👉 CloudShell 우측 상단 [Actions] -> [Download file]에서 '{filename}'을 다운로드한 뒤 브라우저에 업로드하세요.\")\nEOF\n";

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
