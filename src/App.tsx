import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface PromptTemplate {
  name: string;
  data: {
    taskContext: string;
    toneContext: string;
    backgroundData: string;
    detailedTask: string;
    examples: string;
    conversationHistory: string;
    immediateTask: string;
    thinkingSteps: string;
    outputFormatting: string;
    prefilledResponse: string;
  };
}

const promptTemplates: PromptTemplate[] = [
  {
    name: "AI Career Coach (Joe)",
    data: {
      taskContext: "You will be acting as an AI career coach named Joe created by the company AdAstra Careers. Your goal is to give career advice to users.",
      toneContext: "You should maintain a friendly customer service tone. You will be replying to users who are on the AdAstra site and who will be confused if you don't respond in the character of Joe.",
      backgroundData: "Here is the career guidance document you should reference when answering the user: <guide>[DOCUMENT]</guide>",
      detailedTask: "Here are some important rules for the interaction:\n- Always stay in character, as Joe, an AI from AdAstra careers\n- If you are unsure how to respond, say \"Sorry, I didn't understand that. Could you repeat the question?\"\n- If someone asks something irrelevant, say, \"Sorry, I am Joe and I give career advice. Do you have a career question today I can help you with?\"",
      examples: "Here is an example of how to respond in a standard interaction:\n<example>\nUser: Hi, how were you created and what do you do?\nJoe: Hello! My name is Joe, and I was created by AdAstra Careers to give career advice. What can I help you with today?\n</example>",
      conversationHistory: "Here is the conversation history (between the user and you) prior to the question. It could be empty if there is no prior history:\n<history>[HISTORY]</history>",
      immediateTask: "Here is the user's question: <question>[QUESTION]</question>",
      thinkingSteps: "How do you respond to the user's question?\n\nThink about your answer first before you respond.",
      outputFormatting: "Put your response in <response></response> tags.",
      prefilledResponse: "<response>"
    }
  },
  {
    name: "Technical Writing Assistant",
    data: {
      taskContext: "You are a technical writing assistant helping users create clear, comprehensive documentation for software projects.",
      toneContext: "Maintain a professional yet approachable tone. Be precise and thorough while remaining accessible to developers of various experience levels.",
      backgroundData: "Reference the project's existing documentation, coding standards, and style guides when available: <docs>[PROJECT_DOCS]</docs>",
      detailedTask: "Guidelines for technical writing:\n- Use clear, concise language\n- Include code examples where relevant\n- Structure information logically with headers and lists\n- Explain complex concepts with simple analogies when possible\n- Always test code examples before including them",
      examples: "Example documentation format:\n<example>\n## Function Name\n**Purpose:** Brief description\n**Parameters:** List with types and descriptions\n**Returns:** Description of return value\n**Example Usage:**\n```javascript\ncode example here\n```\n</example>",
      conversationHistory: "Previous conversation context: <history>[HISTORY]</history>",
      immediateTask: "Current documentation request: <request>[REQUEST]</request>",
      thinkingSteps: "Consider the audience, complexity level, and required detail before responding.",
      outputFormatting: "Format your response with proper markdown syntax and clear section headers.",
      prefilledResponse: "# Documentation\n\n"
    }
  },
  {
    name: "Creative Writing Coach",
    data: {
      taskContext: "You are a creative writing coach helping aspiring authors develop their storytelling skills and overcome writer's block.",
      toneContext: "Be encouraging, constructive, and inspiring. Provide specific feedback while maintaining enthusiasm for the creative process.",
      backgroundData: "Consider the writer's genre preferences, experience level, and specific goals: <context>[WRITER_CONTEXT]</context>",
      detailedTask: "Coaching principles:\n- Focus on strengths before addressing areas for improvement\n- Provide actionable, specific suggestions\n- Encourage experimentation and risk-taking\n- Help identify unique voice and style\n- Suggest exercises to overcome specific challenges",
      examples: "Sample feedback structure:\n<example>\nStrengths: Your dialogue feels natural and reveals character personality effectively.\n\nAreas to develop: Consider varying your sentence structure for better rhythm.\n\nSuggested exercise: Try rewriting a paragraph using only short sentences, then only long ones, then find the perfect mix.\n</example>",
      conversationHistory: "Previous writing discussions: <history>[HISTORY]</history>",
      immediateTask: "Current writing challenge or piece to review: <challenge>[WRITING_CHALLENGE]</challenge>",
      thinkingSteps: "Analyze the writing, identify key strengths and improvement areas, then craft encouraging yet constructive feedback.",
      outputFormatting: "Structure feedback with clear sections: Strengths, Areas for Growth, Specific Suggestions, Next Steps.",
      prefilledResponse: "## Writing Feedback\n\n### Strengths\n"
    }
  }
];

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate>(promptTemplates[0]);
  const [formData, setFormData] = useState(promptTemplates[0].data);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTemplateChange = (template: PromptTemplate) => {
    setSelectedTemplate(template);
    setFormData(template.data);
    setIsDropdownOpen(false);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const promptSections = [
    { 
      number: 1, 
      title: "Task context", 
      color: "bg-orange-200 border-orange-300 text-orange-800",
      fieldColor: "border-orange-300 focus:border-orange-500",
      field: "taskContext" as keyof typeof formData
    },
    { 
      number: 2, 
      title: "Tone context", 
      color: "bg-orange-200 border-orange-300 text-orange-800",
      fieldColor: "border-orange-300 focus:border-orange-500",
      field: "toneContext" as keyof typeof formData
    },
    { 
      number: 3, 
      title: "Background data, documents, and images", 
      color: "bg-green-200 border-green-400 text-green-800",
      fieldColor: "border-green-300 focus:border-green-500",
      field: "backgroundData" as keyof typeof formData
    },
    { 
      number: 4, 
      title: "Detailed task description & rules", 
      color: "bg-teal-200 border-teal-400 text-teal-800",
      fieldColor: "border-teal-300 focus:border-teal-500",
      field: "detailedTask" as keyof typeof formData
    },
    { 
      number: 5, 
      title: "Examples", 
      color: "bg-blue-200 border-blue-400 text-blue-800",
      fieldColor: "border-blue-300 focus:border-blue-500",
      field: "examples" as keyof typeof formData
    },
    { 
      number: 6, 
      title: "Conversation history", 
      color: "bg-purple-200 border-purple-400 text-purple-800",
      fieldColor: "border-purple-300 focus:border-purple-500",
      field: "conversationHistory" as keyof typeof formData
    },
    { 
      number: 7, 
      title: "Immediate task description or request", 
      color: "bg-pink-200 border-pink-400 text-pink-800",
      fieldColor: "border-pink-300 focus:border-pink-500",
      field: "immediateTask" as keyof typeof formData
    },
    { 
      number: 8, 
      title: "Thinking step by step / take a deep breath", 
      color: "bg-red-200 border-red-400 text-red-800",
      fieldColor: "border-red-300 focus:border-red-500",
      field: "thinkingSteps" as keyof typeof formData
    },
    { 
      number: 9, 
      title: "Output formatting", 
      color: "bg-gray-200 border-gray-400 text-gray-800",
      fieldColor: "border-gray-300 focus:border-gray-500",
      field: "outputFormatting" as keyof typeof formData
    },
    { 
      number: 10, 
      title: "Prefilled response (if any)", 
      color: "bg-gray-200 border-gray-400 text-gray-800",
      fieldColor: "border-gray-300 focus:border-gray-500",
      field: "prefilledResponse" as keyof typeof formData
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Context Buddy</h1>
          <p className="text-lg text-gray-600 mb-6">Build better AI prompts with structured context</p>
          
          {/* Template Dropdown */}
          <div className="relative inline-block">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-left w-64 flex items-center justify-between shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <span className="truncate">{selectedTemplate.name}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full mt-1 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {promptTemplates.map((template, index) => (
                  <button
                    key={index}
                    onClick={() => handleTemplateChange(template)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {template.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Left Side - Prompt Structure */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Prompt structure</h2>
            <div className="space-y-3">
              {promptSections.map((section) => (
                <div
                  key={section.number}
                  className={`px-4 py-3 rounded-lg border-2 ${section.color} font-medium text-sm`}
                >
                  {section.number}. {section.title}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Input Fields */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Build Your Prompt</h2>
            <div className="space-y-4">
              {promptSections.map((section) => (
                <div key={section.number} className="space-y-2">
                  <label className={`text-sm font-medium ${section.color} px-2 py-1 rounded inline-block`}>
                    {section.number}. {section.title}
                  </label>
                  <textarea
                    value={formData[section.field]}
                    onChange={(e) => handleInputChange(section.field, e.target.value)}
                    className={`w-full p-3 border-2 rounded-lg resize-vertical min-h-[80px] focus:outline-none focus:ring-2 focus:ring-opacity-20 ${section.fieldColor} transition-colors`}
                    placeholder={`Enter ${section.title.toLowerCase()}...`}
                  />
                </div>
              ))}
            </div>

            {/* Generate Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button 
                onClick={() => {
                  const fullPrompt = Object.values(formData).filter(Boolean).join('\n\n');
                  navigator.clipboard.writeText(fullPrompt);
                  alert('Prompt copied to clipboard!');
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Copy Full Prompt to Clipboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;