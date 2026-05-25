import { Column, Heading, Meta, Schema, Row, Text } from "@once-ui-system/core";
import { baseURL, work } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

const videos = [
  { id: 1, title: "Cinematic Color Grading Showcase", youtubeId: "ph_u_-mv9Tg" },
  { id: 2, title: "Sound Design Breakdown", youtubeId: "vCgovcfK7e4" },
  { id: 3, title: "Short Film Post-Production", youtubeId: "80CmS4SUVYQ" },
  { id: 4, title: "Commercial Edit - Nike", youtubeId: "FsceVv1CQM4" },
  { id: 5, title: "Music Video VFX", youtubeId: "oRfodl0h5go" },
  { id: 6, title: "Documentary Color Pass", youtubeId: "sAYIQ3mJolw" },
  { id: 7, title: "Trailer Sound Mixing", youtubeId: "P2FrG3frXiw" },
  { id: 8, title: "Automotive Ad Edit", youtubeId: "gkGtWaKIqEU" },
  { id: 9, title: "Fashion Film Creative Finish", youtubeId: "l22LxX6f0PM" },
  { id: 10, title: "Corporate Promo Post", youtubeId: "xy5BurF9qrY" },
];

async function fetchYouTubeTitle(id: string, fallbackTitle: string) {
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);
    if (!res.ok) return fallbackTitle;
    const data = await res.json();
    return data.title || fallbackTitle;
  } catch (error) {
    return fallbackTitle;
  }
}

export default async function Work() {
  const videosWithDynamicTitles = await Promise.all(
    videos.map(async (video) => ({
      ...video,
      fetchedTitle: await fetchYouTubeTitle(video.youtubeId, video.title),
    }))
  );

  return (
    <Column fillWidth center paddingY="12" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/api/og/generate?title=${encodeURIComponent(work.title)}`}
      />

      <Column fillWidth maxWidth="m" horizontal="center" gap="m" style={{ textAlign: "center" }}>
        <Heading as="h1" variant="display-strong-xl">
          Projects
        </Heading>
        <Text as="p" variant="body-default-xl" onBackground="neutral-weak">
          Explore our latest post-production work across various films, commercials, and digital content.
        </Text>
      </Column>

      <Column fillWidth horizontal="center" gap="l" paddingX="m">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", width: "100%", maxWidth: "1400px" }}>
          {videosWithDynamicTitles.map((video) => (
            <Column 
              key={video.id} 
              gap="m" 
            >
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "var(--radius-l)", backgroundColor: "var(--neutral-strong)" }}>
                <iframe
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.fetchedTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <Heading as="h3" variant="heading-strong-s" align="center">
                {video.fetchedTitle}
              </Heading>
            </Column>
          ))}
        </div>
      </Column>
    </Column>
  );
}
