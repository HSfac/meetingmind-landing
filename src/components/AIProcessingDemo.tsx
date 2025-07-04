'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  MicrophoneIcon, 
  CogIcon, 
  DocumentTextIcon, 
  MapIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline'

// 음성 웨이브 애니메이션 컴포넌트
const VoiceWave = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute inset-0 border-2 border-green-500/20 rounded-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 border-2 border-blue-500/20 rounded-2xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.05, 0.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </div>
  )
}

// 진행률 바 컴포넌트
const ProgressBar = ({ progress, color = 'blue' }: { progress: number, color?: string }) => {
  const colorClasses = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  }

  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        className={`h-full ${colorClasses[color as keyof typeof colorClasses]}`}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </div>
  )
}

// 마인드맵 미니 애니메이션 - 중앙에서 4개의 곡선 가지가 뻗어나가는 형태
const MindMapAnimation = () => {
  const { t } = useLanguage()
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-48 sm:h-52 md:h-60 mx-auto bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-lg">
      {/* SVG 곡선 가지들 */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 320 240"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        {/* 4개의 곡선 가지 */}
        {[
          // 위쪽 가지
          { 
            path: "M160 120 Q160 80 180 60", 
            delay: 0.4, 
            color: '#10b981' 
          },
          // 오른쪽 가지
          { 
            path: "M160 120 Q200 120 240 100", 
            delay: 0.6, 
            color: '#8b5cf6' 
          },
          // 아래쪽 가지
          { 
            path: "M160 120 Q160 160 140 180", 
            delay: 0.8, 
            color: '#f59e0b' 
          },
          // 왼쪽 가지
          { 
            path: "M160 120 Q120 120 80 140", 
            delay: 1.0, 
            color: '#ef4444' 
          },
        ].map((branch, index) => (
          <motion.path
            key={index}
            d={branch.path}
            stroke={branch.color}
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: branch.delay,
              ease: "easeOut"
            }}
          />
        ))}
      </svg>

      {/* 중앙 메인 노드 */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center z-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="text-white text-lg sm:text-xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          🧠
        </motion.div>
      </motion.div>
      
      {/* 메인 노드 글로우 효과 */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-blue-400/20 rounded-full z-0"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* 4개 브랜치 노드 - 곡선 끝에 배치 */}
      {[
        { 
          position: { top: '25%', left: '56%' }, 
          delay: 0.8, 
          color: 'from-green-500 to-emerald-500', 
          labelKey: 'keyContent',
          icon: '📝'
        },
        { 
          position: { top: '50%', left: '75%' }, 
          delay: 1.0, 
          color: 'from-purple-500 to-violet-500', 
          labelKey: 'keyPoints',
          icon: '💡'
        },
        { 
          position: { top: '75%', left: '44%' }, 
          delay: 1.2, 
          color: 'from-orange-500 to-amber-500', 
          labelKey: 'actionItems',
          icon: '🎯'
        },
        { 
          position: { top: '58%', left: '25%' }, 
          delay: 1.4, 
          color: 'from-red-500 to-rose-500', 
          labelKey: 'conclusions',
          icon: '✨'
        },
      ].map((branch, index) => (
        <motion.div
          key={index}
          className="absolute z-20"
          style={branch.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: branch.delay, ease: "easeOut" }}
        >
          {/* 브랜치 노드 */}
          <motion.div
            className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${branch.color} rounded-full shadow-lg flex items-center justify-center text-xs sm:text-sm border-2 border-white`}
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {branch.icon}
          </motion.div>
          
          {/* 브랜치 라벨 */}
          <motion.div
            className="absolute bg-white/95 backdrop-blur-sm px-1.5 py-1 sm:px-2.5 sm:py-1.5 rounded-md sm:rounded-lg text-xs font-medium text-gray-700 shadow-md border border-gray-200 whitespace-nowrap"
            style={{
              left: index === 0 ? '18px' : index === 1 ? '18px' : index === 2 ? '-45px' : '-55px',
              top: index === 0 ? '-5px' : index === 1 ? '-5px' : index === 2 ? '-5px' : '-5px',
            }}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: branch.delay + 0.2 }}
          >
            {t(`aiProcessingDemo.mindmap.branches.${branch.labelKey}`)}
          </motion.div>
        </motion.div>
      ))}
      
      {/* 하단 제목 */}
      <motion.div
        className="absolute -bottom-5 sm:-bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-blue-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('aiProcessingDemo.completion.title')}
        </span>
      </motion.div>
    </div>
  )
}

// 숫자 애니메이션 컴포넌트 (단순한 버전)
const AnimatedNumber = ({ value, suffix = '', delay = 0 }: { value: number, suffix?: string, delay?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {value}{suffix}
    </motion.span>
  )
}

interface AIProcessingDemoProps {
  className?: string
}

const AIProcessingDemo = ({ className = '' }: AIProcessingDemoProps) => {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  // 단계별 정보
  const steps = useMemo(() => [
    {
      id: 'recording',
      title: t('aiProcessingDemo.steps.recording.title'),
      subtitle: t('aiProcessingDemo.steps.recording.subtitle'),
      icon: MicrophoneIcon,
      color: 'green',
      duration: 4000,
    },
    {
      id: 'loading',
      title: t('aiProcessingDemo.steps.loading.title'),
      subtitle: t('aiProcessingDemo.steps.loading.subtitle'),
      icon: CogIcon,
      color: 'blue',
      duration: 3000,
    },
    {
      id: 'analysis',
      title: t('aiProcessingDemo.steps.analysis.title'),
      subtitle: t('aiProcessingDemo.steps.analysis.subtitle'),
      icon: DocumentTextIcon,
      color: 'purple',
      duration: 3000,
    },
    {
      id: 'mindmap',
      title: t('aiProcessingDemo.steps.mindmap.title'),
      subtitle: t('aiProcessingDemo.steps.mindmap.subtitle'),
      icon: MapIcon,
      color: 'orange',
      duration: 2000,
    },
  ], [t])

  const currentStepData = steps[currentStep] || steps[0]

  // 단순한 단계 진행 관리
  useEffect(() => {
    if (currentStep >= steps.length) {
      // 전체 사이클 완료 후 3초 대기 후 리셋
      const resetTimer = setTimeout(() => {
        setCurrentStep(0)
        setProgress(0)
      }, 3000)
      return () => clearTimeout(resetTimer)
    }

    // 진행률 애니메이션
    setProgress(0)
    const progressTimer = setTimeout(() => setProgress(100), 100)

    // 다음 단계로 진행
    const nextStepTimer = setTimeout(() => {
      setCurrentStep(prev => prev + 1)
    }, steps[currentStep]?.duration || 2000)

    return () => {
      clearTimeout(progressTimer)
      clearTimeout(nextStepTimer)
    }
  }, [currentStep, steps])

  return (
    <div className={`apple-card p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 shadow-2xl shadow-gray-200/50 ${className}`}>
      <div className="flex flex-col items-center text-center">
        {/* 동적 아이콘 */}
        <motion.div
          className="relative mb-8"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                {currentStepData.icon && <currentStepData.icon className="w-10 h-10" />}
              </motion.div>
            </AnimatePresence>
            
            {/* 음성 웨이브 (녹음 중일 때만) */}
            {currentStep === 0 && <VoiceWave />}
            
            {/* 글로우 효과 */}
            <motion.div
              className={`absolute inset-0 rounded-2xl ${
                currentStep === 0 ? 'bg-gradient-to-br from-green-500/20 to-blue-500/20' :
                currentStep === 1 ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' :
                currentStep === 2 ? 'bg-gradient-to-br from-purple-500/20 to-orange-500/20' :
                'bg-gradient-to-br from-orange-500/20 to-green-500/20'
              }`}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* 로딩 스피너 (처리 중일 때) */}
            {currentStep === 1 && (
              <motion.div
                className="absolute inset-2 border-2 border-transparent border-t-white rounded-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>
        </motion.div>

        {/* 제목과 부제목 */}
        <motion.h3 
          key={`title-${currentStep}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-gray-900 mb-2"
        >
          {currentStepData.title}
        </motion.h3>

        <motion.p 
          key={`subtitle-${currentStep}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 mb-8 text-lg"
        >
          {currentStepData.subtitle}
        </motion.p>

        {/* 진행률 표시 */}
        <div className="w-full max-w-md mb-8">
          <AnimatePresence mode="wait">
            {currentStep < 3 ? (
              <motion.div
                key={`progress-${currentStep}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {currentStep === 0 ? t('aiProcessingDemo.steps.recording.progress') :
                     currentStep === 1 ? t('aiProcessingDemo.steps.loading.progress') :
                     t('aiProcessingDemo.steps.analysis.progress')}
                  </span>
                  <span className={`font-medium ${
                    currentStep === 0 ? 'text-green-600' :
                    currentStep === 1 ? 'text-blue-600' :
                    'text-purple-600'
                  }`}>
                    {Math.round(progress)}%
                  </span>
                </div>
                <ProgressBar progress={progress} color={currentStepData.color} />
              </motion.div>
            ) : (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircleIcon className="w-5 h-5" />
                  <span className="font-medium">{t('aiProcessingDemo.completion.status')}</span>
                </div>
                <MindMapAnimation />
                <div className="text-center text-sm text-gray-500">
                  {t('aiProcessingDemo.completion.description')}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 통계 (마지막 단계에서만) */}
        <AnimatePresence>
          {currentStep === 3 && (
            <motion.div 
              className="flex items-center gap-8 mt-8 pt-8 border-t border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  <AnimatedNumber value={95} suffix="%" delay={0.5} />
                </div>
                <div className="text-sm text-gray-500">{t('aiProcessingDemo.stats.accuracy')}</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  <AnimatedNumber value={10} suffix={t('aiProcessingDemo.stats.timeUnit')} delay={0.7} />
                </div>
                <div className="text-sm text-gray-500">{t('aiProcessingDemo.stats.processingTime')}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default AIProcessingDemo 