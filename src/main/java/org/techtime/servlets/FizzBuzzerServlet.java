package org.techtime.servlets;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class FizzBuzzerServlet extends HttpServlet {

    public FizzBuzzerServlet(){

    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String input = request.getPathInfo().substring(1);
        System.out.println("input? " + input);

        try {
            int number = Integer.parseInt(input);

            if (number % 15 == 0) {
                response.getWriter().write("fizzbuzz");
                } else if (number % 5 == 0) {
                response.getWriter().write("buzz");
                } else if (number % 3 == 0) {
                response.getWriter().write("fizz");
                } else {
                if (number < 0){
                    response.sendError(400, "invalid input");
                } else {
                    response.getWriter().write(input);
                }
            }
        }
        catch(NumberFormatException e){
            response.sendError(400, "invalid input");
        }
            //** ************** **/
            response.flushBuffer();
    }
}
