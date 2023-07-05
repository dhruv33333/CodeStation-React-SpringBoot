package com.dhruv.CodeStation.interceptors;


import com.dhruv.CodeStation.model.User;
import com.dhruv.CodeStation.repository.UserRepository;
import com.dhruv.CodeStation.utils.Utils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

// basically, middleware for token authorisation
@Component
public class AuthInterceptor implements HandlerInterceptor {

    private Utils utils = new Utils();

    @Autowired
    private UserRepository userRepository;
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token = request.getHeader("Authorization");
        if(token != null && token.startsWith("Bearer ")) {
            token = token.substring(7); // removes "Bearer "
        }
        else {
            response.setStatus(403);
            throw new Exception("Not authorized, token failed");
        }
        String decodedEmail = utils.validateToken(token);

        if(decodedEmail == null) {
            response.setStatus(403);
            throw new Exception("Not authorized, token failed");
        }

        User user = userRepository.findByEmail(decodedEmail);
        request.setAttribute("user", user);

        System.out.println("auth interceptor " + user.toString());

        return HandlerInterceptor.super.preHandle(request, response, handler);
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
    }
}
