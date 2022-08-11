package org.techtime.servlets;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class KataDescriptionServlet extends HttpServlet {

    public KataDescriptionServlet(){

    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        response.getWriter().write("Requests to http://localhost:2990/jira/plugins/servlet/fizzbuzzer/api/:number should return with a number, fizz, buzz or fizzbuzz  "+
        "based on the rules of <a href=\"https://en.wikipedia.org/wiki/Fizz_buzz#:~:text=Players%20generally%20sit%20in%20a,by%2015%20become%20fizz%20buzz\"> Fizzbuzz </a>");
        response.flushBuffer();
    }
}