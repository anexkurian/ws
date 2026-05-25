import {
  Avatar,
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about } from "@/resources";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `${baseURL}/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

const crew = [
  { name: "Abhijith", position: "Editor", image: "" },
  { name: "Akahay", position: "Mix Engineer", image: "" },
  { name: "Anex", position: "Founder & Sound Designer", image: "" },
  { name: "Vimal", position: "Social Media Manager", image: "" },
  { name: "Aleen", position: "Media Manager", image: "" },
  { name: "Hemanth", position: "Studio Manager & Sound Editor", image: "" },
];

export default function About() {
  return (
    <Column fillWidth center paddingY="12" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={about.path}
        title={about.title}
        description={about.description}
        image={`${baseURL}/api/og/generate?title=${encodeURIComponent(about.title)}`}
      />

      <Column fillWidth maxWidth="m" horizontal="center" gap="m" style={{ textAlign: "center" }}>
        <Heading as="h1" variant="display-strong-xl">
          #wearewidely
        </Heading>
        <Text as="p" variant="body-default-xl" onBackground="neutral-weak">
          What started as a small passion project in a makeshift bedroom studio has grown into a full-fledged post-production house. Today, we bring stories to life through expert editing, sound design, and color grading.
        </Text>
      </Column>

      <Column fillWidth maxWidth="l" horizontal="center" gap="xl">
        <Row wrap horizontal="center" gap="xl">
          {crew.slice(0, 3).map((member) => (
            <Column key={member.name} horizontal="center" gap="s" style={{ width: "240px" }}>
              <Avatar size="xl" src={member.image} />
              <Column horizontal="center">
                <Text align="center" variant="heading-strong-m">{member.name}</Text>
                <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                  {member.position}
                </Text>
              </Column>
            </Column>
          ))}
        </Row>
        <Row wrap horizontal="center" gap="xl">
          {crew.slice(3, 6).map((member) => (
            <Column key={member.name} horizontal="center" gap="s" style={{ width: "240px" }}>
              <Avatar size="xl" src={member.image} />
              <Column horizontal="center">
                <Text align="center" variant="heading-strong-m">{member.name}</Text>
                <Text align="center" variant="body-default-s" onBackground="neutral-weak">
                  {member.position}
                </Text>
              </Column>
            </Column>
          ))}
        </Row>
      </Column>

      <Column fillWidth maxWidth="m" horizontal="center" gap="m" paddingTop="128" paddingBottom="128" style={{ textAlign: "center" }}>
        <Heading as="h2" variant="display-strong-m">
          Contact Us
        </Heading>
        <Column horizontal="center" gap="s">
          <Text variant="body-default-l" onBackground="neutral-weak">Phone: +91 95445 39373</Text>
          <Text variant="body-default-l" onBackground="neutral-weak">Email: widelystudios@gmail.com</Text>
          <Text variant="body-default-l" onBackground="neutral-weak">Instagram: @widelystudios</Text>
        </Column>
      </Column>
    </Column>
  );
}