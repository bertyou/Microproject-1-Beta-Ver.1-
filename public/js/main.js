document.getElementById('fetch-data-btn').addEventListener('click', async () => {
    console.log('Button clicked'); // Check if the button click is registered
    try {
      const response = await fetch('/api/data');
      console.log('Response received', response); // Check the response
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Data parsed', data); // Check the parsed data
      // Display and format the JSON data on the page
      const displayDiv = document.getElementById('json-data-display');

      // Create a formatted string
      let formattedStory = 'In a small classroom, there are six students:\n\n';
  
      // Iterate through each student in the data
      data.forEach((student, index) => {
        formattedStory += `${index + 1}. ${student.Name}\n`;
        formattedStory += `- ID: ${student.ID}\n`;
        formattedStory += `- Birthday: ${student.Birthday}\n\n`;
      });
      // Display the formatted data in the 'json-data-display' div
      displayDiv.textContent = formattedStory;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  