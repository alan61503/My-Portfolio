import { Flex, Meta, Schema } from "@once-ui-system/core";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL, gallery, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: "/images/Alan.png",
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image="/images/Alan.png"
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <MasonryGrid />
    </Flex>
  );
}
