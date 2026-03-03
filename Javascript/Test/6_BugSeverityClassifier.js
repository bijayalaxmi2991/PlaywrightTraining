// Bug Severity Classifier
// As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level. Classification Matrix: - always + blocker → P0 | always + major → P1 | always + minor → P2 - often + blocker → P1 | often + major → P2 | often + minor → P3 - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4
// Examples:
// Input:
// frequency = "always", impact = "blocker"
// Output:
// Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: blocker Severity: P0 - Critical: Stop release immediately
// 💡 Explanation:A bug that always occurs and is a blocker gets the highest severity P0, requiring immediate action.


var frequency = "always", impact = "blocker";
console.log("Bug Title: Checkout page crashes on applying coupon Frequency: "+frequency+" Impact: "+impact+" Severity: "+getbugSeverity());
function getbugSeverity(){
    if(frequency == 'always'){
        if(impact == 'blocker')
            return 'P0';
        else if(impact == 'major')
            return 'P1';
        else if(impact == 'minor')
            return 'P2';
    }
    else if(frequency == 'often'){
        if(impact == 'blocker')
            return 'P1';
        else if(impact == 'major')
            return 'P2';
        else if(impact == 'minor')
            return 'P3';
    }
    else if(frequency == 'rarely'){
        if(impact == 'blocker')
            return 'P2';
        else if(impact == 'major')
            return 'P3';
        else if(impact == 'minor')
            return 'P4';
    
    }

}