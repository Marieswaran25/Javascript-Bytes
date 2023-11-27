function shuffleImage(width, height, data, iterations) {
    const newData = [...data]; // Create a copy of the original data
  
    for (let i = 0; i < iterations; i++) {
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const newIndex = ((2 * x + y) % width + ((x + y) % height) * width);
          newData[newIndex] = data[y * width + x];
        }
      }
    }
  
    return newData;
  }
  
  const inputWidth = 5;
  const inputHeight = 5;
  const inputData = [210, 217, 243, 255, 211];
  const inputIterations = 3;
  
  const shuffledData = shuffleImage(inputWidth, inputHeight, inputData, inputIterations);
  console.log(shuffledData);
  