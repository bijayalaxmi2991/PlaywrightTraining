0 == ""; // O/P - true
0 == "0"; // O/P - true
0 == false; // O/P - true
null == undefined; // O/P - true
"\t\n\r" == 0; // O/P - true

//exceptions
//all below Output - false
null == 0;
null == "";
null == false;
undefined == 0;
undefined == "";
undefined == false;
NaN == NaN;

"" === false; //o/p - false, string != boolean
"" == false; //o/p - true
0 === false; //o/p - false, number != boolean

"0" == false; //o/p - true
"" == "0"; //o/p - false, empty string != string with character '0'

