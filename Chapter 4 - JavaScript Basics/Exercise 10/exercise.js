const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted
yearsCompleted === firstYearCompleted

/*
    - Double equals operator : a flexible comparison operator that casts the left variable data type into the right 
    variable data type, if they're different, and then compare values. 

    - Triple equals operator : a strict comparison operator where it doesn't cast data types but compare values strictly.

    Example: 
        1 == true  --> true 
            Explanation: 1 gets converted to boolean, since this is the flexible comparison, and becomes true. 
            Boolean(1) = true --> true == true --> true

        1 === true --> false
            Explanation: 1 is a number and true is boolean. This is strict comparison.
            No casting --> different data types --> false

    NOTE: === is the preferable/safe option to use.
*/ 