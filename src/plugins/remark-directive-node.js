import { h } from "hastscript";
import { visit } from "unist-util-visit";

export default function remarkDirectiveNode() {
  return function (tree) {
    visit(tree, function (node) {
      if (node.type === "containerDirective" || node.type === "leafDirective" || node.type === "textDirective") {
        const data = node.data || (node.data = {});
        const hast = h(node.name, node.attributes || {});

        data.hName = hast.tagName;
        data.hProperties = hast.properties;
      }
    });
  };
}
