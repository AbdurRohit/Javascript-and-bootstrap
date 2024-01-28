package Answers;


import java.util.*;

public class Coc {
     public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = 10;
        List<Integer> damage = new ArrayList<>();
        List<Integer> size = new ArrayList<>();
        List<Integer> category = new ArrayList<>();
        System.out.println("Enter details: ");
        for (int i = 0; i < n; i++) {
            damage.add(sc.nextInt());
            size.add(sc.nextInt());
            category.add(sc.nextInt());
        }

        int barrackSize = sc.nextInt();

        System.out.println(barrackSize);
        sc.close();
        List<Integer> brkList = new ArrayList<>();

        int best;
        for(int j = 0;j<barrackSize ; j++){
            //calling fucntion
            best = justify(category.get(j), category, size);
            brkList.add(best);
            if(barrackSize >= size.get(best) ){
                barrackSize -=  size.get(best);
                category.remove(best);
                size.remove(best);
            }
        }
        //Now we got the indexes which makes the perfect combination
        int totdmg = 0;
        for (int k = 0; k<brkList.size();k++){
            totdmg += damage.get(k);
        }
        System.err.println(totdmg + " ");

    }

    public static int justify(int cat, List<Integer> catList, List<Integer> sizeList) {
        List<Integer> iList = new ArrayList<>();


        for (int i = 0; i < catList.size(); i++) { 
            //finding the index of selected catagory
            if (catList.get(i) == cat)
                iList.add(i);
        }
        int min = sizeList.get(iList.get(0));

        for (int j = 1; j < iList.size(); j++) { 
            //searching for the minimum size
            if (sizeList.get(iList.get(j)) < min) {
                min = sizeList.get(iList.get(j));
            }
        }
        return min; //returning the minimum size 
    }
}

