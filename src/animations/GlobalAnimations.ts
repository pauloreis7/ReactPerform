import { 
  Flex, 
  Stack,
  FlexProps, 
  StackProps,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const easing = [0.6, -0.05, 0.01, 0.99]

export const fadeInUpForms = {
  initial: {
    y: -30,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

export const containerAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
      duration: 0.6,
      ease: easing
    }
  }
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const dropList = {
  initial: (i: number) => ({
    opacity: 0,
    y: -70 + i,
  }),
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05
    },
  })
}

export const MotionFlex = motion<FlexProps>(Flex)
export const MotionStack = motion<StackProps>(Stack)