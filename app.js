    function removeElement() {
      var numsInput = document.getElementById("nums");
      var valInput = document.getElementById("val");
      var resultOutput = document.getElementById("result");

      // Get the values from the input fields
      var nums = numsInput.value.split(",").map(Number);
      var val = parseInt(valInput.value);

      // Call the removeElement function
      var newLength = removeElementFunction(nums, val);

      // Display the modified array and its length
      resultOutput.textContent = "Modified Array: " + nums.slice(0, newLength) + "\nNew Length: " + newLength;
    }

    function removeElementFunction(nums, val) {
      let amount = 0;
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
          nums[amount++] = nums[i];
        }
      }
      return amount;
    }