package com.javamultiplex.interceptor;

import com.javamultiplex.constant.AppConstants;
import org.slf4j.MDC;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

@Component
public class RequestInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        UUID uuid = UUID.randomUUID();
        MDC.put(AppConstants.TRACKING_ID, uuid.toString());
        return true;
    }
}
