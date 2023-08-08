class test {
    
    // Getting the degree 3 from a string 5x^3+4x-30
    public static String count_degree(String n) {
        char c = '0';
        int f = 0;
        String str = "";
        for (int i = 0; i < n.length(); i++) {
            char ch = n.charAt(i);
            if (ch == 'x') {
                if (n.charAt(i + 1) == '+' || n.charAt(i + 1) == '-') {
                    c = '1';
                    break;
                } else if (n.charAt(i + 1) == '^') {
                    c = n.charAt(i + 2);
                    break;
                } else if (Character.isDigit(n.charAt(i + 1)) == true) {
                    c = n.charAt(i + 1);
                    break;
                } else if (Character.isDigit(n.charAt(i + 1)) == true && Character.isDigit(n.charAt(i + 2)) == true) {
                    f = 1;
                    str = "" + n.charAt(i + 1) + n.charAt(i + 2);
                    break;
                } else {
                    c = '0';
                }
            }
        }
        if (f != 1)
            str = "" + c;
        return str;
    }
    
    // Getting the numeric only roots of the eqn

    public static int[] get_roots(String[] strarr) {
        int[] iarr = new int[strarr.length];
        for (int i = 0; i < strarr.length; i++) {
            String str = "";
            if (strarr[i].charAt(strarr[i].length() - 1) == '-')
                strarr[i + 1] = "-" + strarr[i + 1];
            for (int j = 0; j < strarr[i].length(); j++) {
                if (strarr[i].charAt(j) == 'x') {
                    break;
                } else {
                    str = str + strarr[i].charAt(j);
                }
            }
            iarr[i] = Integer.parseInt(str);
        }
        return iarr;
    }
    
    // Getting an array ["5x^3","4x","-30"] from a string 5x^3+4x-30
    public static String[] get_root_blocks(String n) {
        String p = "";
        int k = 0;
        n = n + "+";
        String[] sarr = new String[Integer.parseInt(count_degree(n)) * 2];
        for (int i = 0; i < n.length(); i++) {
            char ch = n.charAt(i);
            if (ch != '+' && ch != '-') {
                p = p + ch;
            } else {
                if (ch == '-')
                    sarr[k++] = p + "-";
                else
                    sarr[k++] = p;
                p = "";
            }
        }
        int count = 0;
        for (int i = 0; i < sarr.length; i++) {
            if(sarr[i]!=null)
                count++;
        }
        String[] sclarr = new String[count];
        for (int i = 0; i < sclarr.length; i++) {
            if(sarr[i]!=null&&sarr[i]!="")
                sclarr[i] = sarr[i];
        }
        return sclarr;
    }
    
    
    public static String correct_format(String s) {
        s = "+" + s;
        String str = "";
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '+' && s.charAt(i + 1) == 'x') {
                str = str + "+1";
            } else if (s.charAt(i) == '-' && s.charAt(i + 1) == 'x') {
                str = str + "-1";
            } else
                str = str + s.charAt(i);
        }
        return str;
    }
    

    public static void main(String[] args) {
        String s = "x^3-3x+1";
        String corrected = correct_format(s);
        // System.out.println(corrected);
        String root_blocks[] = get_root_blocks(corrected);
        int num_root[] = get_roots(root_blocks);
        for (int i = 0; i < num_root.length; i++) {
            if(num_root[i]!=0)
                System.out.println(num_root[i]);
        }
        // for (int i = 0; i < root_blocks.length; i++) {
        //     if(root_blocks[i]!=null)
        //         System.out.println(root_blocks[i]);
        // }
    }
}