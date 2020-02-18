package com.javamultiplex.aspect;

import com.javamultiplex.constant.AppConstants;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.MDC;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class LoggingAspect {

    @Pointcut("within(@org.springframework.stereotype.Repository *)" +
            "|| within(@org.springframework.stereotype.Service *)" +
            "|| within(@org.springframework.stereotype.Component *)" +
            "|| within(@org.springframework.web.bind.annotation.RestController *)" +
            "|| within(@org.springframework.web.bind.annotation.RestControllerAdvice *)")
    private void springBeanPointcut() {
    }

    @Around("springBeanPointcut()")
    public Object around(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        Signature signature = proceedingJoinPoint.getSignature();
        String methodName = signature.getName();
        String className = signature.getDeclaringType().getSimpleName();
        String trackingId = MDC.get(AppConstants.TRACKING_ID);
        log.info("Inside class {} :  {}() method with tracking id : {}", className, methodName, trackingId);
        Object object = proceedingJoinPoint.proceed();
        log.info("Outside class {} :  {}() method with tracking id : {}", className, methodName, trackingId);
        return object;
    }
}
