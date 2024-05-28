import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ModeToggle } from "@/components/ModeToggle";
import { Facebook, Twitter } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col mx-auto py-2 sm:py-20 items-center justify-center">
          <h1 className="text-3xl font-bold">Gajendra Budhathoki</h1>
          <p className="mt-2 text-xl text-muted-foreground">
            Journalist | Economist
          </p>
          <div className="flex gap-2 mt-2 p-2">
            <a href="https://www.x.com/gbudhathoki">
              <Twitter />
            </a>
            <a href="https://www.facebook.com/gajendra">
              <Facebook />
            </a>
          </div>
          <Image
            src="/pfp.jpg"
            alt="Picture of Gajendra"
            width={350}
            height={350}
            className="mt-2 rounded-md"
          />
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-xl">Articles</h2>
          <div>
            <a
              href="https://taksarnews.com/2024/05/28058/"
              className="flex flex-col items-center justify-center gap-4 border border-gray-800 p-2 rounded-sm dark:border-gray-200"
            >
              <Image src="/taksar.jpg" width={200} height={100} alt="magzine" />
              अर्बपति मन्त्रीहरूको देशमा ७२ प्रतिशत नेपालीको पीडा
            </a>
          </div>
          <div>
            <a
              href="https://taksarnews.com/2024/05/28058/"
              className="flex flex-col items-center justify-center gap-4 border border-gray-800 p-2 rounded-sm dark:border-gray-200"
            >
              <Image src="/taksar.jpg" width={200} height={100} alt="magzine" />
              बर्कनदास सरकारको बजेटका अपेक्षा
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
