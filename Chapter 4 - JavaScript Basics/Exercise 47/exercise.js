const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let length = numbers.length;

console.log("\nFirst element: " + numbers[0]);
console.log("Last element: " + numbers[length - 1]);
console.log("Arrays length: " + length);
console.log("20th element: " + numbers[19]);

/* Last output */
/*
    Clarification:
        - I wrote 19 and not 20 becuase I considered zero-based indexing. So basically 
        the twentieth element is at index 19.

    Explanation:
        - The arrays length is 10, trying to reach any element beyond this number/index - 1,
        will result in undefined becuase there's no element defined to be there. We're
        trying to reach an out-of-bounds index.
*/
