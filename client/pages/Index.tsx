import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Users, MapPin, Zap } from "lucide-react";

export default function Index() {
  const [surname, setSurname] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!surname.trim()) return;

    setIsSearching(true);
    try {
      const response = await fetch(
        `/api/voters/search?surname=${encodeURIComponent(surname)}`
      );
      const data = await response.json();
      navigate("/search-results", { state: { results: data } });
    } catch (error) {
      console.error("Error searching voters:", error);
      setIsSearching(false);
    }
  };

  const suggestedSurnames = ["शर्मा", "पटेल", "भारती", "गुप्ता", "वर्मा", "सिंह"];

  const handleQuickSearch = (quickSurname: string) => {
    setSurname(quickSurname);
    setIsSearching(true);
    const form = new FormData();
    form.append("surname", quickSurname);

    fetch(`/api/voters/search?surname=${encodeURIComponent(quickSurname)}`)
      .then((response) => response.json())
      .then((data) => {
        navigate("/search-results", { state: { results: data } });
      })
      .catch((error) => {
        console.error("Error searching voters:", error);
        setIsSearching(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-indigo-100 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">वोटर खोज</h1>
          </div>
          <p className="text-sm text-gray-600">वार्ड मतदाता सूची</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            मतदाता खोज प्रणाली
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            वार्ड की मतदाता सूची में आसानी से अपने पसंद के मतदाता को खोजें। बस
            सरनाम दर्ज करें और तुरंत परिणाम प्राप्त करें।
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100 p-8 md:p-10 mb-12">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="relative">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                सरनाम दर्ज करें
              </label>
              <div className="relative">
                <Input
                  id="surname"
                  type="text"
                  placeholder="उदाहरण: शर्मा"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="pl-4 pr-12 py-3 text-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <Button
              type="submit"
              disabled={!surname.trim() || isSearching}
              size="lg"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-lg py-6 rounded-lg font-semibold"
            >
              {isSearching ? "खोज रहे हैं..." : "खोजें"}
            </Button>
          </form>
        </div>

        {/* Suggested Searches */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            लोकप्रिय सरनाम
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {suggestedSurnames.map((suggestionSurname) => (
              <button
                key={suggestionSurname}
                onClick={() => handleQuickSearch(suggestionSurname)}
                disabled={isSearching}
                className="px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-700 font-medium hover:border-indigo-400 hover:bg-indigo-50 transition-colors disabled:opacity-50"
              >
                {suggestionSurname}
              </button>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">तत्काल खोज</h4>
            <p className="text-sm text-gray-600">
              सेकंड में मतदाता डेटा खोजें
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">सटीक परिणाम</h4>
            <p className="text-sm text-gray-600">
              समान सरनाम वाले सभी मतदाता खोजें
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">वार्ड विवरण</h4>
            <p className="text-sm text-gray-600">
              पूरा पता और वार्ड जानकारी प्राप्त करें
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
