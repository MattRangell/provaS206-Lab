package GoRestRunner;

import com.intuit.karate.junit5.Karate;

public class GoRestRunner {

    @Karate.Test
    Karate testRunner() {
        return Karate.run("apiGorest").relativeTo(getClass());
    }    

}
