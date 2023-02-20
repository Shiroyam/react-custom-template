declare module "*.module.css" {
  const styles: Record<string, string>
  export default styles
}

declare module "*.module.less" {
  const styles: Record<string, string>
  export default styles
}

declare module "*.module.scss" {
  const styles: Record<string, string>
  export default styles
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module "*.jpg"

declare module "*.jpeg"

declare module "*.png"
