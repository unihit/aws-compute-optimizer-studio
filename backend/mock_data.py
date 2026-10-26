"""
Realistic Mock & Normalized Schema Generator for AWS Compute Optimizer Studio.
Matches AWS Compute Optimizer API structures:
- GetRecommendationSummaries
- GetEC2InstanceRecommendations
- GetEBSVolumeRecommendations
- GetRDSDatabaseRecommendations
- GetECSServiceRecommendations
- GetLambdaFunctionRecommendations
- GetIdleRecommendations
"""

from datetime import datetime, timezone
from typing import Dict, Any, List


def get_sample_dataset(account_id: str = "123456789012", region: str = "ap-northeast-2") -> Dict[str, Any]:
    now_iso = datetime.now(timezone.utc).isoformat()
    return {
        "metadata": {
            "accountId": account_id,
            "accountAlias": "prod-core-workloads",
            "region": region,
            "collectedAt": now_iso,
            "sourceMode": "demo",
            "lookBackPeriodInDays": 14,
            "enhancedInfrastructureMetrics": "Active",
            "computeOptimizerStatus": "Active",
            "computeOptimizerNote": "Compute Optimizer 정상 활성화됨 (최근 14일 CloudWatch 메트릭 수집 중)",
        },
        "costExplorer": {
            "lastMonthTotalUsd": 28450.00,
            "savingsPlansCoveragePct": 68.4,
            "riCoveragePct": 54.2,
            "billingPeriod": "최근 30일 청구 기준",
        },
        "exchangeRateInfo": {
            "rate": 1384.50,
            "source": "AWS Invoice (직전 마감 청구서 확정 환율)",
            "mode": "aws_invoice",
            "invoiceId": "KR-INV-202609-88412",
            "billingPeriod": "2026-09",
            "updatedAt": now_iso,
        },
        "ec2": [
            {
                "instanceArn": f"arn:aws:ec2:{region}:{account_id}:instance/i-0a1b2c3d4e5f60001",
                "accountId": account_id,
                "instanceName": "prd-order-api-was-01",
                "currentInstanceType": "m5.2xlarge",
                "finding": "Overprovisioned",
                "findingReasonCodes": ["CPUOverprovisioned", "MemoryOverprovisioned"],
                "lookBackPeriodInDays": 14.0,
                "utilizationMetrics": [
                    {"name": "CPU", "statistic": "MAXIMUM", "value": 18.4},
                    {"name": "MEMORY", "statistic": "MAXIMUM", "value": 31.2},
                    {"name": "NETWORK_IN_BYTES_PER_SECOND", "statistic": "MAXIMUM", "value": 12450000},
                ],
                "currentPerformanceRisk": "VeryLow",
                "effectiveRecommendationPreferences": {
                    "cpuVendorArchitectures": ["AWS_ARM64", "CURRENT"],
                    "enhancedInfrastructureMetrics": "Active",
                    "lookBackPeriod": "DAYS_14",
                },
                "recommendationOptions": [
                    {
                        "instanceType": "m7g.xlarge",
                        "rank": 1,
                        "performanceRisk": 1.0,
                        "migrationEffort": "Medium",
                        "platformDifferences": ["Architecture"],
                        "projectedUtilizationMetrics": [
                            {"name": "CPU", "statistic": "MAXIMUM", "value": 32.1},
                            {"name": "MEMORY", "statistic": "MAXIMUM", "value": 62.4},
                        ],
                        "savingsOpportunity": {
                            "savingsOpportunityPercentage": 54.2,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 186.40},
                        },
                        "savingsOpportunityAfterDiscounts": {
                            "savingsOpportunityPercentage": 54.2,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 142.10},
                        },
                    },
                    {
                        "instanceType": "m6i.xlarge",
                        "rank": 2,
                        "performanceRisk": 1.0,
                        "migrationEffort": "VeryLow",
                        "platformDifferences": [],
                        "projectedUtilizationMetrics": [
                            {"name": "CPU", "statistic": "MAXIMUM", "value": 35.8},
                            {"name": "MEMORY", "statistic": "MAXIMUM", "value": 62.4},
                        ],
                        "savingsOpportunity": {
                            "savingsOpportunityPercentage": 50.0,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 172.00},
                        },
                    },
                ],
                "tags": [
                    {"key": "Environment", "value": "Production"},
                    {"key": "Service", "value": "Order-API"},
                    {"key": "Owner", "value": "commerce-platform-team"},
                ],
            },
            {
                "instanceArn": f"arn:aws:ec2:{region}:{account_id}:instance/i-0a1b2c3d4e5f60002",
                "accountId": account_id,
                "instanceName": "prd-payment-batch-worker-01",
                "currentInstanceType": "c5.4xlarge",
                "finding": "Overprovisioned",
                "findingReasonCodes": ["CPUOverprovisioned", "NetworkBandwidthOverprovisioned"],
                "lookBackPeriodInDays": 14.0,
                "utilizationMetrics": [
                    {"name": "CPU", "statistic": "MAXIMUM", "value": 14.2},
                    {"name": "MEMORY", "statistic": "MAXIMUM", "value": 24.8},
                ],
                "currentPerformanceRisk": "VeryLow",
                "recommendationOptions": [
                    {
                        "instanceType": "c6i.xlarge",
                        "rank": 1,
                        "performanceRisk": 1.0,
                        "migrationEffort": "VeryLow",
                        "platformDifferences": [],
                        "projectedUtilizationMetrics": [
                            {"name": "CPU", "statistic": "MAXIMUM", "value": 51.0},
                            {"name": "MEMORY", "statistic": "MAXIMUM", "value": 49.6},
                        ],
                        "savingsOpportunity": {
                            "savingsOpportunityPercentage": 75.0,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 412.50},
                        },
                    }
                ],
                "tags": [
                    {"key": "Environment", "value": "Production"},
                    {"key": "Service", "value": "Payment-Batch"},
                    {"key": "Owner", "value": "fin-settlement-team"},
                ],
            },
            {
                "instanceArn": f"arn:aws:ec2:{region}:{account_id}:instance/i-0a1b2c3d4e5f60003",
                "accountId": account_id,
                "instanceName": "prd-search-indexer-node-02",
                "currentInstanceType": "r5.large",
                "finding": "Underprovisioned",
                "findingReasonCodes": ["MemoryUnderprovisioned", "CPUUnderprovisioned"],
                "lookBackPeriodInDays": 14.0,
                "utilizationMetrics": [
                    {"name": "CPU", "statistic": "MAXIMUM", "value": 94.6},
                    {"name": "MEMORY", "statistic": "MAXIMUM", "value": 92.1},
                ],
                "currentPerformanceRisk": "High",
                "recommendationOptions": [
                    {
                        "instanceType": "r6i.xlarge",
                        "rank": 1,
                        "performanceRisk": 1.0,
                        "migrationEffort": "VeryLow",
                        "platformDifferences": [],
                        "projectedUtilizationMetrics": [
                            {"name": "CPU", "statistic": "MAXIMUM", "value": 45.2},
                            {"name": "MEMORY", "statistic": "MAXIMUM", "value": 46.0},
                        ],
                        "savingsOpportunity": {
                            "savingsOpportunityPercentage": 0.0,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 0.0},
                        },
                    }
                ],
                "tags": [
                    {"key": "Environment", "value": "Production"},
                    {"key": "Service", "value": "Search-Engine"},
                    {"key": "Owner", "value": "search-ai-team"},
                ],
            },
            {
                "instanceArn": f"arn:aws:ec2:{region}:{account_id}:instance/i-0a1b2c3d4e5f60004",
                "accountId": account_id,
                "instanceName": "stg-analytics-etl-01",
                "currentInstanceType": "r5.2xlarge",
                "finding": "Overprovisioned",
                "findingReasonCodes": ["CPUOverprovisioned", "MemoryOverprovisioned"],
                "lookBackPeriodInDays": 14.0,
                "utilizationMetrics": [
                    {"name": "CPU", "statistic": "MAXIMUM", "value": 21.5},
                    {"name": "MEMORY", "statistic": "MAXIMUM", "value": 28.0},
                ],
                "currentPerformanceRisk": "VeryLow",
                "recommendationOptions": [
                    {
                        "instanceType": "r7g.large",
                        "rank": 1,
                        "performanceRisk": 1.5,
                        "migrationEffort": "Medium",
                        "platformDifferences": ["Architecture"],
                        "projectedUtilizationMetrics": [
                            {"name": "CPU", "statistic": "MAXIMUM", "value": 68.4},
                            {"name": "MEMORY", "statistic": "MAXIMUM", "value": 74.2},
                        ],
                        "savingsOpportunity": {
                            "savingsOpportunityPercentage": 76.8,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 345.80},
                        },
                    },
                    {
                        "instanceType": "r6i.large",
                        "rank": 2,
                        "performanceRisk": 1.0,
                        "migrationEffort": "VeryLow",
                        "platformDifferences": [],
                        "projectedUtilizationMetrics": [
                            {"name": "CPU", "statistic": "MAXIMUM", "value": 72.1},
                            {"name": "MEMORY", "statistic": "MAXIMUM", "value": 74.2},
                        ],
                        "savingsOpportunity": {
                            "savingsOpportunityPercentage": 73.5,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 330.90},
                        },
                    },
                ],
                "tags": [
                    {"key": "Environment", "value": "Staging"},
                    {"key": "Service", "value": "Data-ETL"},
                    {"key": "Owner", "value": "data-eng-team"},
                ],
            },
            {
                "instanceArn": f"arn:aws:ec2:{region}:{account_id}:instance/i-0a1b2c3d4e5f60005",
                "accountId": account_id,
                "instanceName": "prd-auth-gateway-01",
                "currentInstanceType": "m6i.large",
                "finding": "Optimized",
                "findingReasonCodes": [],
                "lookBackPeriodInDays": 14.0,
                "utilizationMetrics": [
                    {"name": "CPU", "statistic": "MAXIMUM", "value": 64.2},
                    {"name": "MEMORY", "statistic": "MAXIMUM", "value": 58.9},
                ],
                "currentPerformanceRisk": "Low",
                "recommendationOptions": [
                    {
                        "instanceType": "m6i.large",
                        "rank": 1,
                        "performanceRisk": 1.0,
                        "migrationEffort": "VeryLow",
                        "platformDifferences": [],
                        "projectedUtilizationMetrics": [
                            {"name": "CPU", "statistic": "MAXIMUM", "value": 64.2},
                            {"name": "MEMORY", "statistic": "MAXIMUM", "value": 58.9},
                        ],
                        "savingsOpportunity": {
                            "savingsOpportunityPercentage": 0.0,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 0.0},
                        },
                    }
                ],
                "tags": [
                    {"key": "Environment", "value": "Production"},
                    {"key": "Service", "value": "Auth-Gateway"},
                    {"key": "Owner", "value": "sec-platform-team"},
                ],
            },
        ],
        "ebs": [
            {
                "volumeArn": f"arn:aws:ec2:{region}:{account_id}:volume/vol-0987654321fedcba1",
                "accountId": account_id,
                "currentConfiguration": {
                    "volumeType": "gp2",
                    "volumeSize": 2000,
                    "volumeBaselineIOPS": 6000,
                    "volumeBurstIOPS": 6000,
                    "volumeBaselineThroughput": 250,
                    "volumeBurstThroughput": 250,
                    "rootVolume": False,
                },
                "finding": "NotOptimized",
                "utilizationMetrics": [
                    {"name": "VolumeReadOpsPerSecond", "statistic": "MAXIMUM", "value": 850.0},
                    {"name": "VolumeWriteOpsPerSecond", "statistic": "MAXIMUM", "value": 1120.0},
                ],
                "lookBackPeriodInDays": 14.0,
                "currentPerformanceRisk": "Low",
                "volumeRecommendationOptions": [
                    {
                        "configuration": {
                            "volumeType": "gp3",
                            "volumeSize": 2000,
                            "volumeBaselineIOPS": 3000,
                            "volumeBurstIOPS": 3000,
                            "volumeBaselineThroughput": 125,
                            "volumeBurstThroughput": 125,
                        },
                        "rank": 1,
                        "performanceRisk": 1.0,
                        "savingsOpportunity": {
                            "savingsOpportunityPercentage": 20.0,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 45.60},
                        },
                    }
                ],
                "tags": [
                    {"key": "Name", "value": "prd-order-db-backup-vol"},
                    {"key": "Environment", "value": "Production"},
                    {"key": "Owner", "value": "commerce-platform-team"},
                ],
            },
            {
                "volumeArn": f"arn:aws:ec2:{region}:{account_id}:volume/vol-0987654321fedcba2",
                "accountId": account_id,
                "currentConfiguration": {
                    "volumeType": "io1",
                    "volumeSize": 1000,
                    "volumeBaselineIOPS": 10000,
                    "volumeBurstIOPS": 10000,
                    "volumeBaselineThroughput": 500,
                    "volumeBurstThroughput": 500,
                    "rootVolume": False,
                },
                "finding": "NotOptimized",
                "utilizationMetrics": [
                    {"name": "VolumeReadOpsPerSecond", "statistic": "MAXIMUM", "value": 1400.0},
                    {"name": "VolumeWriteOpsPerSecond", "statistic": "MAXIMUM", "value": 980.0},
                ],
                "lookBackPeriodInDays": 14.0,
                "currentPerformanceRisk": "VeryLow",
                "volumeRecommendationOptions": [
                    {
                        "configuration": {
                            "volumeType": "gp3",
                            "volumeSize": 1000,
                            "volumeBaselineIOPS": 4000,
                            "volumeBurstIOPS": 4000,
                            "volumeBaselineThroughput": 250,
                            "volumeBurstThroughput": 250,
                        },
                        "rank": 1,
                        "performanceRisk": 1.0,
                        "savingsOpportunity": {
                            "savingsOpportunityPercentage": 84.5,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 642.00},
                        },
                    }
                ],
                "tags": [
                    {"key": "Name", "value": "prd-legacy-log-store"},
                    {"key": "Environment", "value": "Production"},
                    {"key": "Owner", "value": "infra-ops-team"},
                ],
            },
        ],
        "rds": [
            {
                "resourceArn": f"arn:aws:rds:{region}:{account_id}:db:prd-member-mysql-01",
                "accountId": account_id,
                "engine": "mysql",
                "engineVersion": "8.0.35",
                "promotionTier": 1,
                "currentDBInstanceClass": "db.r5.4xlarge",
                "dbClusterIdentifier": "",
                "instanceFinding": "Overprovisioned",
                "storageFinding": "NotOptimized",
                "instanceFindingReasonCodes": ["CPUOverprovisioned", "EBSIOPSOverprovisioned"],
                "storageFindingReasonCodes": ["EBSVolumeAllocatedStorageUnderprovisioned"],
                "currentStorageConfiguration": {
                    "storageType": "io1",
                    "allocatedStorage": 1500,
                    "iops": 12000,
                    "maxAllocatedStorage": 3000,
                },
                "utilizationMetrics": [
                    {"name": "CPU", "statistic": "MAXIMUM", "value": 19.8},
                    {"name": "Memory", "statistic": "MAXIMUM", "value": 41.2},
                    {"name": "DatabaseConnections", "statistic": "MAXIMUM", "value": 142.0},
                ],
                "instanceRecommendationOptions": [
                    {
                        "dbInstanceClass": "db.r6g.2xlarge",
                        "rank": 1,
                        "performanceRisk": 1.0,
                        "projectedUtilizationMetrics": [
                            {"name": "CPU", "statistic": "MAXIMUM", "value": 36.4},
                        ],
                        "savingsOpportunity": {
                            "savingsOpportunityPercentage": 55.4,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 980.20},
                        },
                    }
                ],
                "storageRecommendationOptions": [
                    {
                        "storageConfiguration": {
                            "storageType": "gp3",
                            "allocatedStorage": 1500,
                            "iops": 6000,
                            "storageThroughput": 250,
                        },
                        "rank": 1,
                        "savingsOpportunity": {
                            "savingsOpportunityPercentage": 62.0,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 510.00},
                        },
                    }
                ],
                "tags": [
                    {"key": "Environment", "value": "Production"},
                    {"key": "Service", "value": "Member-Core"},
                    {"key": "Owner", "value": "dba-team"},
                ],
            },
            {
                "resourceArn": f"arn:aws:rds:{region}:{account_id}:db:prd-catalog-aurora-pg-writer",
                "accountId": account_id,
                "engine": "aurora-postgresql",
                "engineVersion": "15.4",
                "promotionTier": 1,
                "currentDBInstanceClass": "db.r6g.2xlarge",
                "dbClusterIdentifier": "prd-catalog-aurora-cluster",
                "instanceFinding": "Overprovisioned",
                "storageFinding": "Optimized",
                "instanceFindingReasonCodes": ["CPUOverprovisioned"],
                "storageFindingReasonCodes": [],
                "utilizationMetrics": [
                    {"name": "CPU", "statistic": "MAXIMUM", "value": 24.1},
                    {"name": "Memory", "statistic": "MAXIMUM", "value": 52.0},
                ],
                "instanceRecommendationOptions": [
                    {
                        "dbInstanceClass": "db.r6g.xlarge",
                        "rank": 1,
                        "performanceRisk": 1.0,
                        "projectedUtilizationMetrics": [
                            {"name": "CPU", "statistic": "MAXIMUM", "value": 48.2},
                        ],
                        "savingsOpportunity": {
                            "savingsOpportunityPercentage": 50.0,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 445.00},
                        },
                    }
                ],
                "storageRecommendationOptions": [],
                "tags": [
                    {"key": "Environment", "value": "Production"},
                    {"key": "Service", "value": "Catalog"},
                    {"key": "Owner", "value": "catalog-dev-team"},
                ],
            },
        ],
        "ecs": [
            {
                "serviceArn": f"arn:aws:ecs:{region}:{account_id}:service/prd-eks-fargate-cluster/notification-dispatcher-svc",
                "accountId": account_id,
                "currentServiceConfiguration": {
                    "memory": 8192,
                    "cpu": 4096,
                    "AutoScalingConfiguration": "TARGET_TRACKING_SCALING",
                    "taskDefinitionArn": f"arn:aws:ecs:{region}:{account_id}:task-definition/notification-dispatcher:28",
                },
                "finding": "Overprovisioned",
                "findingReasonCodes": ["CPUOverprovisioned", "MemoryOverprovisioned"],
                "utilizationMetrics": [
                    {"name": "CPU", "statistic": "MAXIMUM", "value": 22.4},
                    {"name": "Memory", "statistic": "MAXIMUM", "value": 26.8},
                ],
                "serviceRecommendationOptions": [
                    {
                        "memory": 2048,
                        "cpu": 1024,
                        "SavingsOpportunity": {
                            "savingsOpportunityPercentage": 75.0,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 218.40},
                        },
                        "projectedUtilizationMetrics": [
                            {"name": "CPU", "statistic": "MAXIMUM", "value": 78.2},
                            {"name": "Memory", "statistic": "MAXIMUM", "value": 79.5},
                        ],
                    }
                ],
                "tags": [
                    {"key": "Environment", "value": "Production"},
                    {"key": "Service", "value": "Notification"},
                    {"key": "Owner", "value": "messaging-team"},
                ],
            }
        ],
        "lambda": [
            {
                "functionArn": f"arn:aws:lambda:{region}:{account_id}:function:prd-image-thumbnail-resizer:$LATEST",
                "accountId": account_id,
                "functionVersion": "$LATEST",
                "currentConfiguration": {
                    "memorySize": 3008,
                    "timeout": 60,
                },
                "finding": "NotOptimized",
                "findingReasonCodes": ["MemoryOverprovisioned"],
                "numberOfInvocations": 4850000,
                "utilizationMetrics": [
                    {"name": "Duration", "statistic": "AVERAGE", "value": 340.5},
                    {"name": "Memory", "statistic": "MAXIMUM", "value": 612.0},
                ],
                "memorySizeRecommendationOptions": [
                    {
                        "rank": 1,
                        "memorySize": 1024,
                        "projectedUtilizationMetrics": [
                            {"name": "DurationLowerBound", "statistic": "AVERAGE", "value": 355.0},
                            {"name": "DurationUpperBound", "statistic": "AVERAGE", "value": 390.0},
                        ],
                        "savingsOpportunity": {
                            "savingsOpportunityPercentage": 61.5,
                            "estimatedMonthlySavings": {"currency": "USD", "value": 164.80},
                        },
                    }
                ],
                "tags": [
                    {"key": "Environment", "value": "Production"},
                    {"key": "Service", "value": "Media-Pipeline"},
                    {"key": "Owner", "value": "media-team"},
                ],
            }
        ],
        "idle": [
            {
                "resourceArn": f"arn:aws:ec2:{region}:{account_id}:instance/i-0idle998877665544",
                "resourceId": "i-0idle998877665544",
                "resourceType": "EC2Instance",
                "accountId": account_id,
                "finding": "Idle",
                "findingDescription": "Instance CPU utilization has been consistently < 1% and network I/O < 5MB/day over the past 14 days.",
                "lookBackPeriodInDays": 14.0,
                "savingsOpportunity": {
                    "savingsOpportunityPercentage": 100.0,
                    "estimatedMonthlySavings": {"currency": "USD", "value": 284.00},
                },
                "utilizationMetrics": [
                    {"name": "CPU", "statistic": "MAXIMUM", "value": 0.6},
                    {"name": "Network", "statistic": "MAXIMUM", "value": 0.1},
                ],
                "tags": [
                    {"key": "Name", "value": "dev-old-poc-server-2025"},
                    {"key": "Environment", "value": "Development"},
                    {"key": "Owner", "value": "ai-lab-team"},
                ],
            },
            {
                "resourceArn": f"arn:aws:ec2:{region}:{account_id}:volume/vol-0idle112233445566",
                "resourceId": "vol-0idle112233445566",
                "resourceType": "EBSVolume",
                "accountId": account_id,
                "finding": "Unattached",
                "findingDescription": "EBS volume (500 GB gp3) has been unattached and had zero read/write IOPS for 14 days.",
                "lookBackPeriodInDays": 14.0,
                "savingsOpportunity": {
                    "savingsOpportunityPercentage": 100.0,
                    "estimatedMonthlySavings": {"currency": "USD", "value": 45.60},
                },
                "utilizationMetrics": [
                    {"name": "VolumeReadOpsPerSecond", "statistic": "MAXIMUM", "value": 0.0},
                    {"name": "VolumeWriteOpsPerSecond", "statistic": "MAXIMUM", "value": 0.0},
                ],
                "tags": [
                    {"key": "Name", "value": "unattached-snapshot-restore-test"},
                    {"key": "Environment", "value": "Staging"},
                    {"key": "Owner", "value": "infra-ops-team"},
                ],
            },
            {
                "resourceArn": f"arn:aws:rds:{region}:{account_id}:db:stg-abandoned-qa-db",
                "resourceId": "stg-abandoned-qa-db",
                "resourceType": "RDSDBInstance",
                "accountId": account_id,
                "finding": "Idle",
                "findingDescription": "RDS instance has had 0 active database connections for 14 consecutive days.",
                "lookBackPeriodInDays": 14.0,
                "savingsOpportunity": {
                    "savingsOpportunityPercentage": 100.0,
                    "estimatedMonthlySavings": {"currency": "USD", "value": 318.00},
                },
                "utilizationMetrics": [
                    {"name": "DatabaseConnections", "statistic": "MAXIMUM", "value": 0.0},
                    {"name": "CPU", "statistic": "MAXIMUM", "value": 2.1},
                ],
                "tags": [
                    {"key": "Environment", "value": "Staging"},
                    {"key": "Service", "value": "QA-Test"},
                    {"key": "Owner", "value": "qa-automation-team"},
                ],
            },
        ],
        "extendedSupport": [
            {
                "resourceArn": f"arn:aws:eks:{region}:{account_id}:cluster/prd-legacy-eks-cluster-v127",
                "resourceId": "prd-legacy-eks-cluster-v127",
                "resourceName": "prd-legacy-eks-cluster-v127",
                "serviceType": "EKS",
                "engineOrPlatform": "Amazon EKS",
                "currentVersion": "1.27",
                "recommendedVersion": "1.31+ (Standard Support)",
                "finding": "ExtendedSupport",
                "statusDetail": "EKS 1.27 표준 지원 종료 — 클러스터당 시간당 $0.50 추가 과금 (총 $0.60/hr vs 표준 $0.10/hr)",
                "monthlySurchargeUsd": 365.00,
                "savingsPercentage": 83.3,
                "environment": "Production",
                "owner": "container-platform-team",
                "actionGuidance": "EKS 클러스터 버전을 1.31 이상(Standard Support)으로 인플레이스 업그레이드하여 월 $365.00 추가 요금 제거",
            },
            {
                "resourceArn": f"arn:aws:rds:{region}:{account_id}:db:prd-legacy-mysql57-core",
                "resourceId": "prd-legacy-mysql57-core",
                "resourceName": "prd-legacy-mysql57-core",
                "serviceType": "RDS",
                "engineOrPlatform": "RDS MySQL (db.r5.2xlarge, 8 vCPU, Multi-AZ)",
                "currentVersion": "5.7.44",
                "recommendedVersion": "MySQL 8.0 LTS",
                "finding": "ExtendedSupport",
                "statusDetail": "RDS MySQL 5.7 Extended Support 과금 중 — 16 vCPU(Multi-AZ) × $0.10/vCPU-hr 추가 요금 발생",
                "monthlySurchargeUsd": 1168.00,
                "savingsPercentage": 100.0,
                "environment": "Production",
                "owner": "dba-team",
                "actionGuidance": "Blue/Green 배포를 활용해 RDS MySQL 8.0으로 메이저 버전 업그레이드 시 Extended Support 추가 과금($1,168/월) 100% 절감",
            },
            {
                "resourceArn": f"arn:aws:rds:{region}:{account_id}:db:stg-old-pg11-reporting",
                "resourceId": "stg-old-pg11-reporting",
                "resourceName": "stg-old-pg11-reporting",
                "serviceType": "RDS",
                "engineOrPlatform": "Aurora PostgreSQL (db.r6g.large, 2 vCPU)",
                "currentVersion": "11.21",
                "recommendedVersion": "PostgreSQL 15 / 16",
                "finding": "ExtendedSupport",
                "statusDetail": "PostgreSQL 11 Extended Support 과금 중 — 2 vCPU × $0.10/vCPU-hr 추가 과금 발생",
                "monthlySurchargeUsd": 146.00,
                "savingsPercentage": 100.0,
                "environment": "Staging",
                "owner": "data-eng-team",
                "actionGuidance": "Aurora PostgreSQL 15 이상으로 메이저 버전 업그레이드하여 Extended Support 회피",
            },
        ],
        "networkAudit": {
            "summary": {
                "totalEipCount": 8,
                "unattachedEipCount": 3,
                "totalAlbCount": 6,
                "idleOrNoTargetAlbCount": 2,
                "totalNatGwCount": 4,
                "idleOrRedundantNatGwCount": 1,
                "missingS3EndpointVpcCount": 1,
            },
            "items": [
                {
                    "resourceId": "eipalloc-0a112233445566778 (43.201.102.11)",
                    "resourceName": "unassigned-nat-eip-01",
                    "subType": "UnusedEIP",
                    "finding": "Unattached",
                    "currentConfig": "Public IPv4 (미연결 EIP: 43.201.102.11)",
                    "recommendedConfig": "EIP 릴리스 (ReleaseAddress)",
                    "utilizationDetail": "연결된 인스턴스(InstanceId) 및 네트워크 인터페이스(AssociationId) 없음 — 시간당 $0.005 과금",
                    "monthlySavingsUsd": 3.65,
                    "environment": "Production",
                    "owner": "net-ops-team",
                    "actionGuidance": "전체 EIP 8개 중 미사용 3개 감지: 불필요한 공인 IPv4 주소를 즉시 Release하여 유휴 IPv4 요금 제거",
                },
                {
                    "resourceId": "eipalloc-0b998877665544332 (3.38.210.45)",
                    "resourceName": "old-bastion-floating-eip",
                    "subType": "UnusedEIP",
                    "finding": "Unattached",
                    "currentConfig": "Public IPv4 (미연결 EIP: 3.38.210.45)",
                    "recommendedConfig": "EIP 릴리스 (ReleaseAddress)",
                    "utilizationDetail": "퇴역한 Bastion 호스트 해제 후 방치된 EIP — 시간당 $0.005 과금",
                    "monthlySavingsUsd": 3.65,
                    "environment": "Staging",
                    "owner": "sec-platform-team",
                    "actionGuidance": "DNS 레코드 참조 여부 확인 후 `aws ec2 release-address`로 즉시 반환 권고",
                },
                {
                    "resourceId": "eipalloc-0c554433221100998 (13.125.88.190)",
                    "resourceName": "dev-temp-webhook-eip",
                    "subType": "UnusedEIP",
                    "finding": "Unattached",
                    "currentConfig": "Public IPv4 (미연결 EIP: 13.125.88.190)",
                    "recommendedConfig": "EIP 릴리스 (ReleaseAddress)",
                    "utilizationDetail": "미연결 상태로 방치된 개발용 EIP — 시간당 $0.005 과금",
                    "monthlySavingsUsd": 3.65,
                    "environment": "Development",
                    "owner": "commerce-platform-team",
                    "actionGuidance": "미연결 EIP 즉시 반환 (월 $3.65 절감)",
                },
                {
                    "resourceId": "arn:aws:elasticloadbalancing:ap-northeast-2:123456789012:loadbalancer/app/stg-legacy-admin-alb/50dc6c495c0c9188",
                    "resourceName": "stg-legacy-admin-alb",
                    "subType": "IdleALB",
                    "finding": "Idle",
                    "currentConfig": "Application Load Balancer (Internet-facing)",
                    "recommendedConfig": "ALB 삭제 또는 단일 공유 ALB(Host/Path 라우팅)로 통폐합",
                    "utilizationDetail": "리전 내 전체 ALB 6개 중 활성 타겟(Healthy Target) 0개 및 최근 14일 RequestCount 0건",
                    "monthlySavingsUsd": 22.40,
                    "environment": "Staging",
                    "owner": "infra-ops-team",
                    "actionGuidance": "연결된 타겟 그룹에 정상 인스턴스가 없는 유휴 ALB: 삭제 시 기본 시간당 요금($16.43+) 및 IPv4 비용 즉시 절감",
                },
                {
                    "resourceId": "arn:aws:elasticloadbalancing:ap-northeast-2:123456789012:loadbalancer/app/dev-Campaign-preview-alb/91ab2c334d5e6f77",
                    "resourceName": "dev-campaign-preview-alb",
                    "subType": "LowTrafficALB",
                    "finding": "Overprovisioned",
                    "currentConfig": "독립 ALB 단독 운영 (일 평균 요청 < 50건)",
                    "recommendedConfig": "기존 공용 Ingress/ALB에 Host Header 규칙으로 통합",
                    "utilizationDetail": "리전 내 전체 ALB 6개 점검 결과: 마이크로서비스별 개별 ALB 과다 생성으로 고정비 중복 발생",
                    "monthlySavingsUsd": 18.25,
                    "environment": "Development",
                    "owner": "marketing-dev-team",
                    "actionGuidance": "단일 ALB( 또는 EKS ALB Controller `group.name` 공유)로 통합하여 ALB 대수 축소 권고",
                },
                {
                    "resourceId": "nat-09988776655443322 (vpc-0stg1122)",
                    "resourceName": "stg-az2-redundant-nat-gw",
                    "subType": "IdleNATGW",
                    "finding": "Idle",
                    "currentConfig": "NAT Gateway (Multi-AZ 중복 배치 + S3 Gateway Endpoint 미설치)",
                    "recommendedConfig": "비프로덕션 단일 NAT 통합 + 무료 S3/DynamoDB Gateway Endpoint 추가",
                    "utilizationDetail": "전체 NAT GW 4개 중 최근 14일 BytesOut 트래픽 < 10MB/일 및 S3 Gateway Endpoint 누락 감지",
                    "monthlySavingsUsd": 48.50,
                    "environment": "Staging",
                    "owner": "net-ops-team",
                    "actionGuidance": "Staging 환경은 단일 AZ NAT GW로 통합($32.85/월 기본료 절감)하고 무료 S3 Gateway VPC Endpoint를 생성하여 NAT 데이터 처리비($0.045/GB) 제거",
                },
            ],
        },
        "storageLifecycleAudit": {
            "summary": {
                "agedEbsSnapshotCount": 14,
                "agedEbsSnapshotTotalGb": 2400,
                "agedRdsSnapshotCount": 3,
                "agedRdsSnapshotTotalGb": 900,
                "neverExpireLogGroupCount": 9,
                "neverExpireLogTotalGb": 320,
                "s3NoLifecycleBucketCount": 4,
            },
            "items": [
                {
                    "resourceId": "ebs-snapshots-older-than-90d (총 14개 스냅샷)",
                    "resourceName": "90일 이상 장기 방치된 EBS 스냅샷 묶음 (2,400 GB)",
                    "subType": "AgedEBSSnapshot",
                    "finding": "NotOptimized",
                    "currentConfig": "EBS Standard Snapshot 14개 (총 2,400 GB · 90~420일 경과)",
                    "recommendedConfig": "불필요 스냅샷 삭제 또는 AWS Data Lifecycle Manager(DLM) 30일 정책 적용",
                    "utilizationDetail": "이미 삭제된 볼륨(Orphaned)에서 생성된 오래된 수동 스냅샷 14개 ($0.05/GB-월 과금 중)",
                    "monthlySavingsUsd": 120.00,
                    "savingsPercentage": 100.0,
                    "environment": "Production",
                    "owner": "infra-ops-team",
                    "actionGuidance": "90일 이상 경과된 수동 EBS 스냅샷 정리 및 DLM 자동 수명주기 정책 설정으로 월 $120.00 절감",
                },
                {
                    "resourceId": "rds-manual-snapshots-older-than-90d (총 3개)",
                    "resourceName": "장기 방치된 RDS 수동 스냅샷 묶음 (900 GB)",
                    "subType": "AgedRDSSnapshot",
                    "finding": "NotOptimized",
                    "currentConfig": "RDS Manual Snapshot 3개 (총 900 GB · 120일 이상 경과)",
                    "recommendedConfig": "수동 스냅샷 정리 또는 S3 Export 후 아카이빙",
                    "utilizationDetail": "마이그레이션/패치 전 생성 후 삭제하지 않은 수동 DB 스냅샷 3개 ($0.095/GB-월 과금)",
                    "monthlySavingsUsd": 85.50,
                    "savingsPercentage": 100.0,
                    "environment": "Production",
                    "owner": "dba-team",
                    "actionGuidance": "불필요한 구버전 RDS 수동 스냅샷 3개 삭제 시 백업 스토리지 추가 과금 월 $85.50 즉시 제거",
                },
                {
                    "resourceId": "/aws/lambda/* 및 /ecs/prd-* (총 9개 로그 그룹)",
                    "resourceName": "CloudWatch Logs 무기한 보관(Never Expire) 그룹 9개",
                    "subType": "CloudWatchLogsNoRetention",
                    "finding": "NotOptimized",
                    "currentConfig": "Retention: Never Expire (누적 320 GB 보관 중)",
                    "recommendedConfig": "보관 주기 30일(Production) / 7일(Staging·Dev) 설정",
                    "utilizationDetail": "로그 그룹 9개에 만료 주기(retentionInDays) 미설정으로 오래된 로그가 영구 과금 중",
                    "monthlySavingsUsd": 16.00,
                    "savingsPercentage": 80.0,
                    "environment": "Production",
                    "owner": "devops-team",
                    "actionGuidance": "`aws logs put-retention-policy`로 보관 주기를 14~30일로 일괄 지정하여 누적 로그 스토리지 비용 절감",
                },
                {
                    "resourceId": "s3://prd-app-access-logs-archive 외 3개 버킷",
                    "resourceName": "S3 Lifecycle(수명주기) 정책 미설정 대용량 버킷 4개",
                    "subType": "S3NoLifecycle",
                    "finding": "NotOptimized",
                    "currentConfig": "S3 Standard 단일 스토리지 클래스 (Lifecycle 규칙 없음)",
                    "recommendedConfig": "S3 Intelligent-Tiering 또는 30일 후 Glacier Instant Retrieval 전환 정책 추가",
                    "utilizationDetail": "수명주기(LifecycleConfiguration) 및 미완료 멀티파트 업로드 자동 삭제 규칙이 없는 버킷 4개 감지",
                    "monthlySavingsUsd": 94.00,
                    "savingsPercentage": 55.0,
                    "environment": "Production",
                    "owner": "data-eng-team",
                    "actionGuidance": "30일 경과 객체 Glacier 전환 및 7일 경과 Incomplete Multipart Upload 자동 삭제 규칙 설정",
                },
            ],
        },
    }
