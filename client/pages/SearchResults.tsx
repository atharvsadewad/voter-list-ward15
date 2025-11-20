import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SearchVotersResponse, Voter } from "@shared/api";
import {
  ArrowLeft,
  MapPin,
  User,
  CreditCard,
  Users,
  FileText,
} from "lucide-react";

export default function SearchResults() {
  const location = useLocation();
  const results = location.state?.results as SearchVotersResponse | undefined;

  if (!results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
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
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link to="/">
            <Button variant="outline" className="mb-6 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              वापस जाएं
            </Button>
          </Link>
          <div className="text-center py-12">
            <p className="text-gray-600">कोई परिणाम नहीं मिला</p>
          </div>
        </main>
      </div>
    );
  }

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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button and Search Info */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2 w-fit">
              <ArrowLeft className="w-4 h-4" />
              वापस जाएं
            </Button>
          </Link>
          <div className="bg-white rounded-lg px-6 py-3 border border-gray-200">
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">
                "{results.searchTerm}"
              </span>{" "}
              के लिए{" "}
              <span className="font-semibold text-indigo-600">
                {results.count}
              </span>{" "}
              परिणाम मिले
            </p>
          </div>
        </div>

        {/* Results List */}
        {results.count === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              कोई परिणाम नहीं मिला
            </h3>
            <p className="text-gray-600 mb-6">
              "{results.searchTerm}" सरनाम के साथ कोई मतदाता नहीं मिला। कृपया
              पुनः प्रयास करें।
            </p>
            <Link to="/">
              <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700">
                नई खोज करें
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {results.data.map((voter: Voter) => (
              <div
                key={voter.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-indigo-300 transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-4 h-4 text-indigo-600" />
                        <p className="text-xs font-semibold text-gray-500 uppercase">
                          नाम
                        </p>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">
                        {voter.name} {voter.surname}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CreditCard className="w-4 h-4 text-blue-600" />
                        <p className="text-xs font-semibold text-gray-500 uppercase">
                          वोटर आईडी
                        </p>
                      </div>
                      <p className="text-sm font-mono text-gray-700">
                        {voter.voterId}
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <p className="text-xs font-semibold text-gray-500 uppercase">
                          पता
                        </p>
                      </div>
                      <p className="text-sm text-gray-700">{voter.address}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                          आयु
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {voter.age} वर्ष
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                          वार्ड
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          वार्ड {voter.wardNumber}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Info */}
        {results.count > 0 && (
          <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">कुल:</span> {results.count} मतदाता
              मिले
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
