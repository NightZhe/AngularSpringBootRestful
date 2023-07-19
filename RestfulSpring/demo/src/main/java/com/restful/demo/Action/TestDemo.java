package com.restful.demo.Action;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;

public class TestDemo {
    public static void main(String[] args) {
        HashSet<String> usedata = new HashSet<String>();
        usedata.add("asjdfiasf");
        usedata.add("23431234");
        usedata.add("蘋果");
        usedata.add("5jn875vdfad9043");

        // for (String uString : usedata) {
        // System.out.println(uString);
        // }
        HashSet<String> temp = secondSet();
        temp.addAll(usedata);
        for (String tString : temp) {
            System.out.println(tString);
        }

        HashMap<Integer, String> checkMap = new HashMap<Integer, String>();
        checkMap.put(1, "good");
        checkMap.put(2, "bad");
        checkMap.put(3, "batter");
        checkMap.put(4, "lucky");

        checkMap.replace(1, "good", "nogood");
        checkMap.replace(4, "this for replace");

        String getnumber3 = checkMap.get(3).substring(0, 3);

        System.out.println("值:" + getnumber3);
        for (int hm : checkMap.keySet()) {
            System.out.println(hm + ":" + checkMap.get(hm));
        }
        System.out.println("-------------------------------");
        Iterator<String> itr = checkMap.values().iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }
    }

    public static HashSet<String> secondSet() {
        HashSet<String> second = new HashSet<String>();
        second.add("香蕉");
        second.add("蘋果");
        return second;
    }
}
