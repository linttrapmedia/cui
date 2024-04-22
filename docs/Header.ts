import { colors, html } from "./config";

export const Header = () => {
  return html.div(
    ["style", "alignItems", "center"],
    ["style", "display", "flex"],
    ["style", "flexDirection", "column"],
    ["style", "gap", "30px"],
    ["style", "padding", "20px"]
  )(
    // github link
    html.a(
      ["attr", "href", "https://github.com/linttrapmedia/capui"],
      ["attr", "target", "_blank"],
      ["style", "padding", "10px"],
      ["style", "display", "flex"],
      ["style", "position", "absolute"],
      ["style", "top", "0"],
      ["style", "right", "0"]
    )(html.img(["attr", "src", "/images/github.svg"], ["attr", "width", "30px"], ["style", "opacity", "0.5"])()),
    // logo
    html.div(
      ["style", "position", "relative"],
      ["style", "height", "75px"],
      ["style", "width", "148px"],
      ["style", "alignSelf", "center"],
      ["style", "margin", "0 0 30px"]
    )(
      html.span(
        ["style", "fontFamily", "Splash"],
        ["style", "fontSize", "75px"],
        ["style", "color", colors.get().accent]
      )("cap"),
      html.span(
        ["style", "color", colors.get().primary],
        ["style", "fontSize", "20px"],
        ["style", "lineHeight", "0.85"],
        ["style", "position", "absolute"],
        ["style", "top", "27px"],
        ["style", "padding", "7px"],
        ["style", "right", "0px"],
        ["style", "backgroundColor", colors.get().accent],
        ["style", "borderRadius", "6px"]
      )("ui"),
      html.span(
        ["style", "position", "absolute"],
        ["style", "bottom", "0"],
        ["style", "right", "5px"],
        ["style", "fontSize", "10px"],
        ["style", "color", colors.get().secondary]
      )("0.0.1")
    ),
    // tagline
    html.div(
      ["style", "color", colors.get().secondary],
      ["style", "fontSize", "32px"],
      ["style", "textAlign", "center"]
    )("The Cut & Paste UI, Ctrl+Done."),
    // Description
    html.div(
      ["style", "color", colors.get().secondary],
      ["style", "fontSize", "14px"],
      ["style", "textAlign", "center"],
      ["style", "maxWidth", "960px"],
      ["style", "margin", "auto"],
      ["style", "padding", "0 40px"],
      ["style", "opacity", "0.6"]
    )(
      "CAP UI is a part of the Lint Trap Media ecosystem. A powerful system for managing user interfaces with far less code and complexity than React, Angular, Vue, Htmx, or any other framework. ",
      html.a(
        ["attr", "href", "https://github.com/linttrapmedia"],
        ["style", "color", colors.get().secondary],
        ["attr", "target", "_blank"]
      )("Learn More")
    ),
    // search
    html.div(
      ["style", "backgroundColor", colors.get().secondary],
      ["style", "display", "flex"],
      ["style", "width", "100%"],
      ["style", "maxWidth", "960px"],
      ["style", "padding", "20px"],
      ["style", "borderRadius", "5px"],
      ["style", "alignItems", "center"],
      ["style", "justifyContent", "space-between"],
      ["style", "gap", "10px"]
    )(
      html.div(
        ["style", "display", "flex"],
        ["style", "alignItems", "center"],
        ["style", "gap", "10px"],
        ["style", "width", "100%"],
        ["style", "maxWidth", "500px"],
        ["style", "color", colors.get().accent]
      )(
        html.div()("$"),
        html.input(
          ["attr", "placeholder", "Search"],
          ["style", "border", "none"],
          ["style", "backgroundColor", "transparent"],
          ["style", "fontSize", "20px"],
          ["style", "color", colors.get().accent],
          ["style", "width", "100%"]
        )()
      ),
      html.button(
        ["style", "backgroundColor", "transparent"],
        ["style", "border", `1px solid ${colors.get().primary}`],
        ["style", "padding", "15px"],
        ["style", "whiteSpace", "nowrap"],
        ["style", "borderRadius", "5px"],
        ["style", "color", colors.get().primary],
        ["style", "fontSize", "15px"],
        ["style", "cursor", "pointer"],
        ["style:mouseover", "color", colors.get().secondary],
        ["style:mouseout", "color", colors.get().primary],
        ["style:mouseover", "backgroundColor", colors.get().accent],
        ["style:mouseout", "backgroundColor", colors.get().secondary],
        ["style", "transition", "all 0.3s"],
        ["style", "fontFamily", "Space Grotesk"],
        ["style", "display", "flex"],
        ["style", "gap", "15px"]
      )(html.span()("Download All"), html.span()("(↓)"))
    )
  );
};
