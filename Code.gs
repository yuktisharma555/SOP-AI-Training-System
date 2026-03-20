function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function processSOP(sop) {
  
  // Simulated AI logic

  var summary = "• " + sop.split(".").slice(0,3).join(".\n• ");

  var steps = "";
  var sentences = sop.split(".");
  for (var i = 0; i < Math.min(sentences.length,5); i++) {
    steps += (i+1) + ". " + sentences[i] + "\n";
  }

  var quiz = 
    "1. What is the first step?\n" +
    "2. Why is this process important?\n" +
    "3. What happens if steps are skipped?\n" +
    "4. Who is responsible for execution?\n";

  return `--- SUMMARY ---\n${summary}\n\n--- STEPS ---\n${steps}\n\n--- QUIZ ---\n${quiz}`;
}
