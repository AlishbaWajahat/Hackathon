import { Suspense } from "react";
import SuccessPageContent from "@/components/successPageContent";

const SuccessPage = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <SuccessPageContent />
  </Suspense>
);

export default SuccessPage;


