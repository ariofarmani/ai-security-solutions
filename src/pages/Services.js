import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  ServerIcon,
  CpuChipIcon,
  CloudIcon,
  LockClosedIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'AI-Powered Security Solutions',
    description: 'Next-generation security powered by artificial intelligence and machine learning.',
    icon: ShieldCheckIcon,
    features: [
      'Real-time threat detection and prevention',
      'Behavioral analysis and anomaly detection',
      'Automated incident response',
      'Predictive security analytics',
    ],
  },
  {
    name: 'Network Security',
    description: 'Comprehensive network protection using enterprise-grade open-source solutions.',
    icon: ServerIcon,
    features: [
      'Open-source firewall implementation',
      'Intrusion Detection/Prevention Systems (IDS/IPS)',
      'Network monitoring and analysis',
      'VPN and secure remote access',
    ],
  },
  {
    name: 'System Optimization',
    description: 'Performance optimization and security hardening for your systems.',
    icon: CpuChipIcon,
    features: [
      'System performance analysis',
      'Security configuration hardening',
      'Resource optimization',
      'Automated maintenance',
    ],
  },
  {
    name: 'Cloud Security',
    description: 'Secure cloud infrastructure and applications with modern security practices.',
    icon: CloudIcon,
    features: [
      'Cloud security architecture',
      'Container security',
      'Cloud compliance and governance',
      'Security automation',
    ],
  },
  {
    name: 'Security Auditing',
    description: 'Comprehensive security assessments and vulnerability management.',
    icon: LockClosedIcon,
    features: [
      'Vulnerability assessments',
      'Penetration testing',
      'Security compliance audits',
      'Risk assessment and management',
    ],
  },
  {
    name: 'Security Monitoring',
    description: '24/7 security monitoring and incident response services.',
    icon: ChartBarIcon,
    features: [
      'Security Operations Center (SOC)',
      'Log analysis and monitoring',
      'Incident response and management',
      'Security metrics and reporting',
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base text-primary-600 font-semibold tracking-wide uppercase"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Comprehensive Security Solutions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
          >
            We provide cutting-edge security solutions that combine AI technology with open-source tools
            to deliver enterprise-grade protection.
          </motion.p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <service.icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">{service.description}</p>
                  </div>
                  <div className="mt-6">
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-primary-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-2 text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}