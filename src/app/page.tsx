import { Column, Text, Button } from "@once-ui-system/core";
import { home, baseURL } from "@/resources";

export async function generateMetadata() {
  return {
    title: home.title,
    description: home.description,
    metadataBase: new URL(baseURL),
    openGraph: {
      title: home.title,
      description: home.description,
      url: `${baseURL}${home.path}`,
      images: [
        `${baseURL}/api/og/generate?title=${encodeURIComponent(home.title)}`,
      ],
    },
  };
}

export default function Home() {
  return (
    <Column fill as="main" center gap="xl" paddingY="12">
      <Column fillWidth maxWidth="m" horizontal="center" gap="0" style={{ textAlign: "center" }}>
        <img 
          src="/WidelyStudiosWhite.svg" 
          alt="Widely Studios Logo" 
          className="theme-logo-white"
          style={{ 
            width: "360px", 
            height: "145px", 
            objectFit: "cover", 
            objectPosition: "center",
            marginBottom: "-24px"
          }} 
        />
        <img 
          src="/WidelyStudiosBlack.svg" 
          alt="Widely Studios Logo" 
          className="theme-logo-black"
          style={{ 
            width: "360px", 
            height: "145px", 
            objectFit: "cover", 
            objectPosition: "center",
            marginBottom: "-24px"
          }} 
        />
        <Text as="p" variant="body-default-m" onBackground="neutral-weak">
          A post-production house is where raw visuals and audio are transformed into a polished
          final production through editing, sound design, color grading, visual enhancement, and creative finishing.
        </Text>
        {home.featured.display && (
          <Button
            href={home.featured.href}
            variant="secondary"
            size="s"
            style={{ marginTop: "16px" }}
          >
            {home.featured.title}
          </Button>
        )}
      </Column>
    </Column>
  );
}
