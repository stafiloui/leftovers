
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function SaveFoodCyprus() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-4">LeftLover 🍱</h1>
      <p className="text-lg text-center max-w-xl mb-8">
        Η πρώτη κυπριακή πλατφόρμα που συνδέει φούρνους, εστιατόρια και σούπερμαρκετ με κόσμο που θέλει να γλυτώσει λεφτά και να σώσει φαγητό. Μπες, δες τι περισσεύκει και κράτα τη δική σου "μαγική σακούλα" πριν πεταχτεί.
      </p>

      <Card className="max-w-xl w-full mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-2">Πώς δουλεύει:</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>📍 Βρες καταστήματα στην περιοχή σου</li>
            <li>🛍️ Διάλεξε το σακουλάκι-έκπληξη</li>
            <li>⏰ Πήγαινε την καθορισμένη ώρα και παρέλαβε</li>
            <li>💸 Πλήρωσε λιγότερα και σώσε φαγητό</li>
          </ul>
        </CardContent>
      </Card>

      {!showLogin && !showSignup && (
        <div className="flex space-x-4">
          <Button onClick={() => setShowSignup(true)}>Δημιουργία Λογαριασμού</Button>
          <Button variant="outline" onClick={() => setShowLogin(true)}>Σύνδεση</Button>
        </div>
      )}

      {showSignup && (
        <Card className="max-w-md w-full mt-6">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Εγγραφή</h2>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Κωδικός" type="password" />
            <Button className="w-full">Εγγραφή</Button>
            <Button variant="ghost" onClick={() => setShowSignup(false)}>Ακύρωση</Button>
          </CardContent>
        </Card>
      )}

      {showLogin && (
        <Card className="max-w-md w-full mt-6">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Σύνδεση</h2>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Κωδικός" type="password" />
            <Button className="w-full">Σύνδεση</Button>
            <Button variant="ghost" onClick={() => setShowLogin(false)}>Ακύρωση</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
