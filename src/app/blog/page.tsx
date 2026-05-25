import { Column, Heading, Meta, Schema, Row, Text, Button } from "@once-ui-system/core";
import { baseURL, blog } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `${baseURL}/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

const products = [
  { id: 1, name: "Widely LUT Pack Vol. 1", description: "Professional cinematic color grading presets for Premiere and Resolve.", price: "$29.99" },
  { id: 2, name: "SFX Library - Transitions", description: "High-quality, studio-grade sound effects for dynamic cuts.", price: "$49.99" },
  { id: 3, name: "Premiere Pro Workflow Templates", description: "Pre-built project structures to speed up your editing workflow.", price: "$39.99" },
  { id: 4, name: "Authentic Film Grain Overlay", description: "Real 35mm and 16mm film grain scans in 4K resolution.", price: "$19.99" },
  { id: 5, name: "Vocal EQ Master Presets", description: "Perfect vocal clarity in seconds with these advanced EQ presets.", price: "$24.99" },
];

export default function Store() {
  return (
    <Column fillWidth center paddingY="12" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={blog.path}
        title={blog.title}
        description={blog.description}
        image={`${baseURL}/api/og/generate?title=${encodeURIComponent(blog.title)}`}
      />

      <Column fillWidth maxWidth="m" horizontal="center" gap="m" style={{ textAlign: "center" }}>
        <Heading as="h1" variant="display-strong-xl">
          Store
        </Heading>
        <Text as="p" variant="body-default-xl" onBackground="neutral-weak">
          Enhance your post-production workflow with our custom software, templates, and presets.
        </Text>
      </Column>

      <Column fillWidth maxWidth="l" horizontal="center" gap="l">
        <Row wrap horizontal="center" gap="l">
          {products.map((product) => (
            <Column 
              key={product.id} 
              gap="m" 
              border="neutral-medium" 
              padding="l" 
              radius="l" 
              background="surface"
              style={{ width: "100%", maxWidth: "340px" }}
            >
              <Column fillWidth radius="m" background="neutral-strong" minHeight="160" center>
                <Text variant="body-default-s" onBackground="neutral-weak">Image placeholder</Text>
              </Column>
              <Column fillWidth gap="8">
                <Heading variant="heading-strong-m">{product.name}</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">{product.description}</Text>
              </Column>
              <Row fillWidth horizontal="between" vertical="center" paddingTop="m">
                <Text variant="heading-strong-m">{product.price}</Text>
                <Button variant="primary" size="s">Add to cart</Button>
              </Row>
            </Column>
          ))}
        </Row>
      </Column>
    </Column>
  );
}
