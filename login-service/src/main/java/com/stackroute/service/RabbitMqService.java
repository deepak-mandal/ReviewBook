package com.stackroute.service;



import com.stackroute.model.User;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.annotation.RabbitListenerConfigurer;
import org.springframework.amqp.rabbit.listener.RabbitListenerEndpointRegistrar;
import org.springframework.stereotype.Component;




import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;


@Slf4j
@Component
public class RabbitMqService implements RabbitListenerConfigurer {

    private static final Logger logger = LoggerFactory.getLogger(RabbitMqService.class);

    /*
     * Add annotation to read messages from a queue
     */

    //UserController userController;
    UserService userService;

    @RabbitListener(queues="${spring.rabbitmq.queue}")
    public void recievedMessage(User user) {
        logger.info("Recieved employee details" + user);

        log.info("Object type of data recieved: {}", ((Object)user).getClass().getSimpleName());
        log.info("UserName recieved: {}", user.getUsername());

        String E=user.getUsername();
        String P=user.getPassword();
        String R=user.getRole();



        try{

            //Specification of JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            String url="jdbc:mysql://localhost:3306/loginservice"
                    +"?verifyServerCertificate-false&useSSL=false&requiredSSL=false";

            String un="root";
            String pwd="";

            String qry="insert into users values(?,?, ?)";

            //connection Interface
            Connection con= DriverManager.getConnection(url, un, pwd);

            //prapared statement interface
            PreparedStatement ps = con.prepareStatement(qry);
            ps.setString(1, E);
            ps.setString(2, P);
            ps.setString(3, R);

            int status=ps.executeUpdate();


            log.info("Record received through RabbitMQ inserted Successfully");
            //Exceptions
        }
        catch(ClassNotFoundException cex){
            System.out.println("Unable to locate the Driver"+cex);
        }
        catch(SQLException se){
            System.out.println("Check the syntax of SQL statement"+se);
        }




    }

    @Override
    public void configureRabbitListeners(RabbitListenerEndpointRegistrar rabbitListenerEndpointRegistrar) {

    }
}
