// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import { TYPE_OPTIONS, SIZE_OPTIONS } from "./consts";
import * as Icons from "../icons";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import TextLink from "./index";

const validate = rel => (rel !== undefined && rel !== "" ? rel : undefined);

const getIcons = defaultIcon => select("Icon", [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("TextLink", module)
  .add(
    "Primary link",
    () => {
      const href = text("Href", "https://kiwi.com");
      const external = boolean("External", false);
      const children = text("children", "Primary link");

      return (
        <TextLink external={external} onClick={action("clicked")} href={href} type="primary">
          {children}
        </TextLink>
      );
    },
    {
      info:
        "Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Secondary link",
    () => {
      const href = text("Href", "https://kiwi.com");
      const external = boolean("External", false);
      const children = text("children", "Secondary link");

      return (
        <TextLink external={external} onClick={action("clicked")} href={href} type="secondary">
          {children}
        </TextLink>
      );
    },
    {
      info:
        "Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Link with icon",
    () => {
      const href = text("Href", "https://kiwi.com");
      const children = text("children", "TextLink with icon");
      const Icon = getIcon(getIcons("ChevronRight"));

      return (
        <TextLink onClick={action("clicked")} href={href} icon={Icon && <Icon />}>
          {children}
        </TextLink>
      );
    },
    {
      info:
        "Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const href = text("Href", "https://kiwi.com");
      const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.SECONDARY);
      const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
      const external = boolean("External", true);
      const children = text("Text", "Custom link");
      const rel = text("Rel", undefined);
      const Icon = getIcon(getIcons("ChevronRight"));
      const dataTest = text("dataTest", "test");
      const tabIndex = text("tabIndex", "");
      const stopPropagation = boolean("stopPropagation", false);
      return (
        <TextLink
          external={external}
          onClick={action("clicked")}
          href={href}
          type={type}
          size={size}
          rel={validate(rel)}
          icon={Icon && <Icon />}
          dataTest={dataTest}
          tabIndex={tabIndex}
          stopPropagation={stopPropagation}
        >
          {children}
        </TextLink>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Accessibility",
    () => {
      const children = text("children", "Primary link");
      const title = text("title", "Clarify purpose of a link for screen readers");

      return (
        <TextLink title={title} onClick={action("clicked")} type="primary">
          {children}
        </TextLink>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <TextLink onClick={action("clicked")} href="#" icon={<Icons.ChevronRight />}>
          Link
        </TextLink>
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
