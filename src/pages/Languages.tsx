
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useLocalStorage from "@/hooks/useLocalStorage";

const Languages = () => {
  const navigate = useNavigate();
  const [streak] = useLocalStorage("streak", 0);
  const [hearts] = useLocalStorage("hearts", 5);

  const languages = [
    { name: "Spanish", code: "es", flag: "🇪🇸" },
    { name: "French", code: "fr", flag: "🇫🇷" },
    { name: "German", code: "de", flag: "🇩🇪" },
    { name: "Italian", code: "it", flag: "🇮🇹" },
    { name: "Portuguese", code: "pt", flag: "🇵🇹" },
    { name: "Japanese", code: "ja", flag: "🇯🇵" },
    { name: "Korean", code: "ko", flag: "🇰🇷" },
    { name: "Chinese", code: "zh", flag: "🇨🇳" },
    { name: "Russian", code: "ru", flag: "🇷🇺" },
    { name: "Arabic", code: "ar", flag: "🇸🇦" },
    { name: "Hindi", code: "hi", flag: "🇮🇳" },
    { name: "Dutch", code: "nl", flag: "🇳🇱" },
    { name: "Swedish", code: "sv", flag: "🇸🇪" },
    { name: "Norwegian", code: "no", flag: "🇳🇴" },
    { name: "Polish", code: "pl", flag: "🇵🇱" },
    { name: "Turkish", code: "tr", flag: "🇹🇷" },
    { name: "Greek", code: "el", flag: "🇬🇷" },
    { name: "Hebrew", code: "he", flag: "🇮🇱" },
    { name: "Thai", code: "th", flag: "🇹🇭" },
    { name: "Vietnamese", code: "vi", flag: "🇻🇳" }
  ];

  const selectLanguage = (languageCode: string) => {
    navigate(`/language/${languageCode}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header
        streak={streak}
        hearts={hearts}
        onProfileClick={() => console.log("Profile clicked")}
      />
      
      <main className="max-w-6xl mx-auto p-6">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Choose Your Language</h1>
          <p className="text-muted-foreground text-lg">
            Select a language to start your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {languages.map((language) => (
            <Card 
              key={language.code} 
              className="transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer"
              onClick={() => selectLanguage(language.code)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{language.flag}</div>
                <h3 className="font-semibold text-lg mb-2">{language.name}</h3>
                <Button variant="outline" className="w-full">
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Languages;
