import Papa from "papaparse";

export const parseCSV = (callback) => {
  // Path to the file in the public folder
  const filePath = "/Electric_Vehicle_Population_Data.csv";

  Papa.parse(filePath, {
    download: true, // Downloads the file from the specified path
    header: true,   // Uses the first row as column headers
    skipEmptyLines: true, // Skips any empty lines in the CSV
    complete: (result) => {
      callback(result.data); // Passes parsed data to the callback
    },
    error: (err) => {
      console.error("Error parsing CSV file:", err); // Logs any errors
    },
  });
};
