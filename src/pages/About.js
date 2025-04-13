import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Security Experts', value: '50+' },
  { label: 'Successful Projects', value: '500+' },
  { label: 'Client Satisfaction', value: '99%' },
];

const values = [
  {
    name: 'Innovation',
    description:
      'We continuously explore and implement cutting-edge AI and security technologies to stay ahead of emerging threats.',
  },
  {
    name: 'Excellence',
    description:
      'Our commitment to excellence drives us to deliver the highest quality security solutions and services.',
  },
  {
    name: 'Integrity',
    description:
      'We maintain the highest standards of integrity and transparency in all our client relationships.',
  },
  {
    name: 'Collaboration',
    description:
      'We work closely with our clients to understand their unique needs and develop tailored security solutions.',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">About</span>
              <span className="block text-primary-600">AI Security Solutions</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We are a leading provider of AI-powered security solutions, committed to protecting your digital assets
              with cutting-edge technology and expertise.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by companies worldwide
            </h2>
            <p className="mt-3 text-xl text-primary-200">
              Our track record speaks for itself
            </p>
          </motion.div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col"
              >
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-primary-200">
                  {stat.label}
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">{stat.value}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Values section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-base text-primary-600 font-semibold tracking-wide uppercase"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              What drives us forward
            </motion.p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {values.map((value, valueIdx) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, x: valueIdx % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + valueIdx * 0.1 }}
                  className="relative"
                >
                  <dt>
                    <p className="text-lg leading-6 font-medium text-gray-900">{value.name}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{value.description}</dd>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-primary-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            <span className="block">Ready to get started?</span>
            <span className="block text-primary-600">Contact us today.</span>
          </motion.h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="inline-flex rounded-md shadow"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}