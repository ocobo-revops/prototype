import { Container } from '../components/container'
import { Button } from '../components/button'
import { Badge } from '../components/badge'
import { Input } from '../components/input'
import { Card } from '../components/card'

/**
 * Design System Showcase Page
 * Living documentation of all DS components.
 * Route: /design-system (hidden from navbar)
 */
export default function DesignSystem() {
  const colors = [
    { name: 'yellow', bg: 'bg-ocobo-yellow', light: 'bg-ocobo-yellow-light' },
    { name: 'mint', bg: 'bg-ocobo-mint', light: 'bg-ocobo-mint-light' },
    { name: 'sky', bg: 'bg-ocobo-sky', light: 'bg-ocobo-sky-light' },
    { name: 'coral', bg: 'bg-ocobo-coral', light: 'bg-ocobo-coral-light' },
    { name: 'dark', bg: 'bg-ocobo-dark', light: 'bg-ocobo-gray-100' },
  ] as const

  const variants = ['solid', 'inverse', 'outline'] as const
  const sizes = ['sm', 'md', 'lg'] as const

  return (
    <div className="min-h-screen bg-ocobo-gray-50 py-12">
      <Container size="lg">
        <h1 className="text-4xl font-display font-bold text-ocobo-dark mb-2">
          Design System
        </h1>
        <p className="text-ocobo-gray-600 mb-12">
          Living documentation of Ocobo design tokens and components.
        </p>

        {/* Color Tokens */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ocobo-dark mb-6">Color Tokens</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {colors.map((color) => (
              <div key={color.name} className="space-y-2">
                <div className={`${color.bg} h-20 rounded-lg`} />
                <div className={`${color.light} h-10 rounded-lg`} />
                <p className="text-sm text-ocobo-gray-600 text-center">{color.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Container Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ocobo-dark mb-6">Container</h2>
          <div className="space-y-4">
            {(['sm', 'md', 'lg', 'full'] as const).map((size) => (
              <div key={size} className="bg-white rounded-lg p-4">
                <p className="text-sm text-ocobo-gray-500 mb-2">size="{size}"</p>
                <Container size={size}>
                  <div className="bg-ocobo-yellow-light border-2 border-dashed border-ocobo-yellow rounded-lg p-4 text-center">
                    Container {size}
                  </div>
                </Container>
              </div>
            ))}
          </div>
        </section>

        {/* Button Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ocobo-dark mb-6">Button</h2>
          
          {/* By Variant */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Variants</h3>
            <div className="flex flex-wrap gap-4 bg-white rounded-lg p-6">
              {variants.map((variant) => (
                <Button key={variant} variant={variant}>
                  {variant}
                </Button>
              ))}
            </div>
          </div>

          {/* By Size */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4 bg-white rounded-lg p-6">
              {sizes.map((size) => (
                <Button key={size} size={size}>
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* With Arrow */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">With Arrow (showArrow)</h3>
            <div className="flex flex-wrap gap-4 bg-white rounded-lg p-6">
              {variants.map((variant) => (
                <Button key={variant} variant={variant} showArrow>
                  {variant}
                </Button>
              ))}
            </div>
          </div>

          {/* Full Matrix */}
          <div>
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Full Matrix (Variant x Size)</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg">
                <thead>
                  <tr className="border-b border-ocobo-gray-200">
                    <th className="p-4 text-left text-sm text-ocobo-gray-600">Variant</th>
                    {sizes.map((size) => (
                      <th key={size} className="p-4 text-center text-sm text-ocobo-gray-600">
                        {size}
                      </th>
                    ))}
                    <th className="p-4 text-center text-sm text-ocobo-gray-600">with arrow</th>
                  </tr>
                </thead>
                <tbody>
                  {variants.map((variant) => (
                    <tr key={variant} className="border-b border-ocobo-gray-100">
                      <td className="p-4 text-sm font-medium text-ocobo-dark">{variant}</td>
                      {sizes.map((size) => (
                        <td key={`${variant}-${size}`} className="p-4 text-center">
                          <Button variant={variant} size={size}>
                            Button
                          </Button>
                        </td>
                      ))}
                      <td className="p-4 text-center">
                        <Button variant={variant} showArrow>
                          Button
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Inverse on dark background */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Inverse on Dark Background</h3>
            <div className="flex flex-wrap gap-4 bg-ocobo-dark rounded-lg p-6">
              <Button variant="inverse">Inverse</Button>
              <Button variant="inverse" showArrow>Inverse with arrow</Button>
            </div>
          </div>
        </section>

        {/* Badge Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ocobo-dark mb-6">Badge</h2>
          
          {/* By Variant */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Variants</h3>
            <div className="flex flex-wrap gap-4 bg-white rounded-lg p-6">
              <Badge variant="solid">solid</Badge>
              <Badge variant="outline">outline</Badge>
              <Badge variant="subtle">subtle</Badge>
            </div>
          </div>

          {/* By Size */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4 bg-white rounded-lg p-6">
              <Badge size="normal">normal</Badge>
              <Badge size="big">big</Badge>
            </div>
          </div>

          {/* By Color Palette */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Color Palettes (subtle variant)</h3>
            <div className="flex flex-wrap gap-4 bg-white rounded-lg p-6">
              <Badge colorPalette="yellow">yellow</Badge>
              <Badge colorPalette="mint">mint</Badge>
              <Badge colorPalette="sky">sky</Badge>
              <Badge colorPalette="coral">coral</Badge>
              <Badge colorPalette="dark">dark</Badge>
            </div>
          </div>

          {/* Full Matrix */}
          <div>
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Full Matrix (Variant x Color)</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg">
                <thead>
                  <tr className="border-b border-ocobo-gray-200">
                    <th className="p-4 text-left text-sm text-ocobo-gray-600">Variant</th>
                    <th className="p-4 text-center text-sm text-ocobo-gray-600">yellow</th>
                    <th className="p-4 text-center text-sm text-ocobo-gray-600">mint</th>
                    <th className="p-4 text-center text-sm text-ocobo-gray-600">sky</th>
                    <th className="p-4 text-center text-sm text-ocobo-gray-600">coral</th>
                    <th className="p-4 text-center text-sm text-ocobo-gray-600">dark</th>
                  </tr>
                </thead>
                <tbody>
                  {(['solid', 'outline', 'subtle'] as const).map((variant) => (
                    <tr key={variant} className="border-b border-ocobo-gray-100">
                      <td className="p-4 text-sm font-medium text-ocobo-dark">{variant}</td>
                      <td className="p-4 text-center"><Badge variant={variant} colorPalette="yellow">Badge</Badge></td>
                      <td className="p-4 text-center"><Badge variant={variant} colorPalette="mint">Badge</Badge></td>
                      <td className="p-4 text-center"><Badge variant={variant} colorPalette="sky">Badge</Badge></td>
                      <td className="p-4 text-center"><Badge variant={variant} colorPalette="coral">Badge</Badge></td>
                      <td className="p-4 text-center"><Badge variant={variant} colorPalette="dark">Badge</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Input Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ocobo-dark mb-6">Input</h2>
          
          {/* By Size */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Sizes</h3>
            <div className="space-y-4 bg-white rounded-lg p-6 max-w-md">
              <div>
                <p className="text-sm text-ocobo-gray-500 mb-2">size="sm"</p>
                <Input size="sm" placeholder="Small input" />
              </div>
              <div>
                <p className="text-sm text-ocobo-gray-500 mb-2">size="md" (default)</p>
                <Input size="md" placeholder="Medium input" />
              </div>
              <div>
                <p className="text-sm text-ocobo-gray-500 mb-2">size="lg"</p>
                <Input size="lg" placeholder="Large input" />
              </div>
            </div>
          </div>

          {/* States */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">States</h3>
            <div className="space-y-4 bg-white rounded-lg p-6 max-w-md">
              <div>
                <p className="text-sm text-ocobo-gray-500 mb-2">Normal</p>
                <Input placeholder="Click to focus" />
              </div>
              <div>
                <p className="text-sm text-ocobo-gray-500 mb-2">Disabled</p>
                <Input placeholder="Disabled input" disabled />
              </div>
            </div>
          </div>

          {/* Types */}
          <div>
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Input Types</h3>
            <div className="space-y-4 bg-white rounded-lg p-6 max-w-md">
              <div>
                <p className="text-sm text-ocobo-gray-500 mb-2">type="text"</p>
                <Input type="text" placeholder="Text input" />
              </div>
              <div>
                <p className="text-sm text-ocobo-gray-500 mb-2">type="email"</p>
                <Input type="email" placeholder="email@example.com" />
              </div>
              <div>
                <p className="text-sm text-ocobo-gray-500 mb-2">type="password"</p>
                <Input type="password" placeholder="Password" />
              </div>
            </div>
          </div>
        </section>

        {/* Card Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ocobo-dark mb-6">Card</h2>
          
          {/* By Variant */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Card.Root variant="default">
                <p className="font-medium">Default</p>
                <p className="text-sm text-ocobo-gray-500">White bg, subtle shadow</p>
              </Card.Root>
              <Card.Root variant="outlined" colorPalette="mint">
                <p className="font-medium">Outlined</p>
                <p className="text-sm text-ocobo-gray-500">White bg, colored border</p>
              </Card.Root>
              <Card.Root variant="ghost">
                <p className="font-medium">Ghost</p>
                <p className="text-sm text-ocobo-gray-500">Transparent bg</p>
              </Card.Root>
              <Card.Root variant="filled" colorPalette="sky">
                <p className="font-medium">Filled</p>
                <p className="text-sm text-ocobo-gray-500">Colored light bg</p>
              </Card.Root>
              <Card.Root variant="elevated">
                <p className="font-medium">Elevated</p>
                <p className="text-sm text-ocobo-gray-500">White bg, larger shadow</p>
              </Card.Root>
            </div>
          </div>

          {/* By Size */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Sizes</h3>
            <div className="flex flex-wrap items-start gap-4">
              <Card.Root size="sm">
                <p className="font-medium">Small (p-4)</p>
              </Card.Root>
              <Card.Root size="md">
                <p className="font-medium">Medium (p-6)</p>
              </Card.Root>
              <Card.Root size="lg">
                <p className="font-medium">Large (p-8)</p>
              </Card.Root>
            </div>
          </div>

          {/* Outlined with Color Palettes */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Outlined + Color Palettes</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {(['yellow', 'mint', 'sky', 'coral', 'dark'] as const).map((color) => (
                <Card.Root key={color} variant="outlined" colorPalette={color} size="sm">
                  <p className="font-medium capitalize">{color}</p>
                </Card.Root>
              ))}
            </div>
          </div>

          {/* Filled with Color Palettes */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Filled + Color Palettes</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {(['yellow', 'mint', 'sky', 'coral', 'dark'] as const).map((color) => (
                <Card.Root key={color} variant="filled" colorPalette={color} size="sm">
                  <p className="font-medium capitalize">{color}</p>
                </Card.Root>
              ))}
            </div>
          </div>

          {/* Card.IconBox */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Card.IconBox (Icon containers)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card.Root variant="outlined" colorPalette="yellow">
                <Card.IconBox colorPalette="yellow">
                  <span className="text-2xl">⚡</span>
                </Card.IconBox>
                <Card.Header>
                  <Card.Title>Light Background</Card.Title>
                  <Card.Description>Default icon box style</Card.Description>
                </Card.Header>
              </Card.Root>
              <Card.Root variant="outlined" colorPalette="mint">
                <Card.IconBox colorPalette="mint" solid>
                  <span className="text-2xl">🎯</span>
                </Card.IconBox>
                <Card.Header>
                  <Card.Title>Solid Background</Card.Title>
                  <Card.Description>With solid=true prop</Card.Description>
                </Card.Header>
              </Card.Root>
              <Card.Root>
                <Card.IconBox colorPalette="sky" size="lg">
                  <span className="text-3xl">📊</span>
                </Card.IconBox>
                <Card.Header>
                  <Card.Title>Large Size</Card.Title>
                  <Card.Description>size="lg" for bigger icons</Card.Description>
                </Card.Header>
              </Card.Root>
              <Card.Root>
                <Card.IconBox colorPalette="dark" solid>
                  <span className="text-2xl">🔒</span>
                </Card.IconBox>
                <Card.Header>
                  <Card.Title>Dark Solid</Card.Title>
                  <Card.Description>Dark palette with solid</Card.Description>
                </Card.Header>
              </Card.Root>
            </div>
          </div>

          {/* Header Composition */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Header Composition (Card.Header, Card.Title, Card.Description)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card.Root size="sm">
                <Card.Header>
                  <Card.Title>Small Card</Card.Title>
                  <Card.Description>This is a small card with header primitives.</Card.Description>
                </Card.Header>
              </Card.Root>
              <Card.Root size="md">
                <Card.Header>
                  <Card.Title>Medium Card</Card.Title>
                  <Card.Description>This is a medium card with header primitives. Text scales with size.</Card.Description>
                </Card.Header>
              </Card.Root>
              <Card.Root size="lg">
                <Card.Header>
                  <Card.Title>Large Card</Card.Title>
                  <Card.Description>This is a large card with header primitives. Notice the larger text and spacing.</Card.Description>
                </Card.Header>
              </Card.Root>
            </div>
          </div>

          {/* Title with `as` prop */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Polymorphic Title (as prop)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card.Root variant="outlined" colorPalette="mint">
                <Card.Header>
                  <Card.Title as="h2">H2 Title</Card.Title>
                  <Card.Description>Using as="h2" for semantic heading.</Card.Description>
                </Card.Header>
              </Card.Root>
              <Card.Root variant="outlined" colorPalette="sky">
                <Card.Header>
                  <Card.Title as="h4">H4 Title</Card.Title>
                  <Card.Description>Using as="h4" for smaller heading.</Card.Description>
                </Card.Header>
              </Card.Root>
              <Card.Root variant="outlined" colorPalette="coral">
                <Card.Header>
                  <Card.Title as="p">Paragraph Title</Card.Title>
                  <Card.Description>Using as="p" when semantic heading not needed.</Card.Description>
                </Card.Header>
              </Card.Root>
            </div>
          </div>

          {/* Title with accent prop */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Accent Title (accent prop)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card.Root variant="filled" colorPalette="mint">
                <Card.Header>
                  <Card.Title accent>Mint Accent</Card.Title>
                  <Card.Description>Title uses colorPalette color with accent prop.</Card.Description>
                </Card.Header>
              </Card.Root>
              <Card.Root variant="filled" colorPalette="coral">
                <Card.Header>
                  <Card.Title accent>Coral Accent</Card.Title>
                  <Card.Description>Accent color matches Card.Root colorPalette.</Card.Description>
                </Card.Header>
              </Card.Root>
              <Card.Root variant="filled" colorPalette="sky">
                <Card.Header>
                  <Card.Title>No Accent (default)</Card.Title>
                  <Card.Description>Without accent prop, title is dark.</Card.Description>
                </Card.Header>
              </Card.Root>
            </div>
          </div>

          {/* Body and Footer */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Body and Footer (Card.Body, Card.Footer)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card.Root size="sm">
                <Card.Header>
                  <Card.Title>Small Card</Card.Title>
                  <Card.Description>With body and footer</Card.Description>
                </Card.Header>
                <Card.Body>
                  <p className="text-sm">Body content with mt-2 margin.</p>
                </Card.Body>
                <Card.Footer>
                  <span className="text-xs text-ocobo-gray-500">Footer with gap-2</span>
                </Card.Footer>
              </Card.Root>
              <Card.Root size="md">
                <Card.Header>
                  <Card.Title>Medium Card</Card.Title>
                  <Card.Description>Default size composition</Card.Description>
                </Card.Header>
                <Card.Body>
                  <p className="text-sm">Body content with mt-3 margin. This is the default size for cards.</p>
                </Card.Body>
                <Card.Footer>
                  <span className="text-sm text-ocobo-gray-500">Footer with gap-3</span>
                </Card.Footer>
              </Card.Root>
              <Card.Root size="lg">
                <Card.Header>
                  <Card.Title>Large Card</Card.Title>
                  <Card.Description>Larger spacing throughout</Card.Description>
                </Card.Header>
                <Card.Body>
                  <p>Body content with mt-4 margin. Larger text and spacing for emphasis.</p>
                </Card.Body>
                <Card.Footer>
                  <span className="text-ocobo-gray-500">Footer with gap-4</span>
                </Card.Footer>
              </Card.Root>
            </div>
          </div>

          {/* Card.Media */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Card.Media (Aspect Ratios)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card.Root>
                <Card.Media src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop" alt="Team meeting" aspectRatio="video" />
                <Card.Header>
                  <Card.Title>Video (16:9)</Card.Title>
                  <Card.Description>Default aspect ratio</Card.Description>
                </Card.Header>
              </Card.Root>
              <Card.Root>
                <Card.Media src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop" alt="Team" aspectRatio="square" />
                <Card.Header>
                  <Card.Title>Square (1:1)</Card.Title>
                  <Card.Description>Perfect for avatars/icons</Card.Description>
                </Card.Header>
              </Card.Root>
              <Card.Root>
                <Card.Media src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=200&fit=crop" alt="Wide view" aspectRatio="wide" />
                <Card.Header>
                  <Card.Title>Wide (21:9)</Card.Title>
                  <Card.Description>Cinematic ratio</Card.Description>
                </Card.Header>
              </Card.Root>
            </div>
          </div>

          {/* Card.Media with bleed */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Card.Media with Bleed</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card.Root>
                <Card.Media src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop" alt="No bleed" />
                <Card.Header>
                  <Card.Title>Without Bleed</Card.Title>
                  <Card.Description>Image has padding, rounded corners</Card.Description>
                </Card.Header>
              </Card.Root>
              <Card.Root>
                <Card.Media src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop" alt="With bleed" bleed />
                <Card.Header>
                  <Card.Title>With Bleed</Card.Title>
                  <Card.Description>Image extends to card edges</Card.Description>
                </Card.Header>
              </Card.Root>
            </div>
          </div>

          {/* Card.Badge - Inset positions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Card.Badge (Inset Positions)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card.Root>
                <Card.Badge position="top-left">
                  <Badge colorPalette="coral" size="normal">New</Badge>
                </Card.Badge>
                <Card.Header>
                  <Card.Title>Top Left</Card.Title>
                </Card.Header>
              </Card.Root>
              <Card.Root>
                <Card.Badge position="top-right">
                  <Badge colorPalette="mint" size="normal">Featured</Badge>
                </Card.Badge>
                <Card.Header>
                  <Card.Title>Top Right</Card.Title>
                </Card.Header>
              </Card.Root>
              <Card.Root>
                <Card.Badge position="bottom-left">
                  <Badge colorPalette="sky" size="normal">Info</Badge>
                </Card.Badge>
                <Card.Header>
                  <Card.Title>Bottom Left</Card.Title>
                </Card.Header>
              </Card.Root>
              <Card.Root>
                <Card.Badge position="bottom-right">
                  <Badge colorPalette="yellow" size="normal">Sale</Badge>
                </Card.Badge>
                <Card.Header>
                  <Card.Title>Bottom Right</Card.Title>
                </Card.Header>
              </Card.Root>
            </div>
          </div>

          {/* Card.Badge - Flush positions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Card.Badge (Flush Positions)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card.Root variant="outlined" colorPalette="mint">
                <Card.Badge position="flush-top-left">
                  <span className="bg-ocobo-coral text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">Hot</span>
                </Card.Badge>
                <Card.Header>
                  <Card.Title>Flush Top-Left</Card.Title>
                </Card.Header>
              </Card.Root>
              <Card.Root variant="outlined" colorPalette="sky">
                <Card.Badge position="flush-top-right">
                  <span className="bg-ocobo-mint text-ocobo-dark px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-lg">Category</span>
                </Card.Badge>
                <Card.Header>
                  <Card.Title>Flush Top-Right</Card.Title>
                </Card.Header>
              </Card.Root>
              <Card.Root variant="outlined" colorPalette="coral">
                <Card.Badge position="flush-bottom-left">
                  <span className="bg-ocobo-dark text-white px-3 py-1 text-xs font-bold">Footer</span>
                </Card.Badge>
                <Card.Header>
                  <Card.Title>Flush Bottom-Left</Card.Title>
                </Card.Header>
              </Card.Root>
              <Card.Root variant="outlined" colorPalette="yellow">
                <Card.Badge position="flush-bottom-right">
                  <span className="bg-ocobo-yellow text-ocobo-dark px-3 py-1 text-xs font-bold">Action</span>
                </Card.Badge>
                <Card.Header>
                  <Card.Title>Flush Bottom-Right</Card.Title>
                </Card.Header>
              </Card.Root>
            </div>
          </div>

          {/* Card.Avatar */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Card.Avatar (Sizes)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card.Root>
                <Card.Header>
                  <div className="flex items-center gap-3">
                    <Card.Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" size="sm" />
                    <div>
                      <Card.Title as="p">Small Avatar</Card.Title>
                      <Card.Description>32x32 pixels</Card.Description>
                    </div>
                  </div>
                </Card.Header>
              </Card.Root>
              <Card.Root>
                <Card.Header>
                  <div className="flex items-center gap-3">
                    <Card.Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" size="md" />
                    <div>
                      <Card.Title as="p">Medium Avatar</Card.Title>
                      <Card.Description>48x48 pixels (default)</Card.Description>
                    </div>
                  </div>
                </Card.Header>
              </Card.Root>
              <Card.Root>
                <Card.Header>
                  <div className="flex items-center gap-3">
                    <Card.Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" size="lg" />
                    <div>
                      <Card.Title as="p">Large Avatar</Card.Title>
                      <Card.Description>64x64 pixels</Card.Description>
                    </div>
                  </div>
                </Card.Header>
              </Card.Root>
            </div>
          </div>

          {/* Card.Avatar with borders */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Card.Avatar with Borders</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card.Root>
                <Card.Header>
                  <div className="flex items-center gap-3">
                    <Card.Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" size="md" border="none" />
                    <div>
                      <Card.Title as="p">No Border</Card.Title>
                      <Card.Description>border="none" (default)</Card.Description>
                    </div>
                  </div>
                </Card.Header>
              </Card.Root>
              <Card.Root>
                <Card.Header>
                  <div className="flex items-center gap-3">
                    <Card.Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" size="md" border="light" />
                    <div>
                      <Card.Title as="p">Light Border</Card.Title>
                      <Card.Description>border="light" - subtle gray</Card.Description>
                    </div>
                  </div>
                </Card.Header>
              </Card.Root>
              <Card.Root>
                <Card.Header>
                  <div className="flex items-center gap-3">
                    <Card.Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" size="md" border="dark" />
                    <div>
                      <Card.Title as="p">Dark Border</Card.Title>
                      <Card.Description>border="dark" - strong contrast</Card.Description>
                    </div>
                  </div>
                </Card.Header>
              </Card.Root>
            </div>
          </div>

          {/* Card.Avatar with colored borders (like founders section) */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Card.Avatar with Colored Borders</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card.Root>
                <div className="text-center">
                  <Card.Avatar size="lg" border="yellow" initials="BB" />
                  <Card.Header>
                    <Card.Title>Benjamin B.</Card.Title>
                    <Card.Description>border="yellow"</Card.Description>
                  </Card.Header>
                </div>
              </Card.Root>
              <Card.Root>
                <div className="text-center">
                  <Card.Avatar size="lg" border="coral" initials="AC" />
                  <Card.Header>
                    <Card.Title>Aude C.</Card.Title>
                    <Card.Description>border="coral"</Card.Description>
                  </Card.Header>
                </div>
              </Card.Root>
              <Card.Root>
                <div className="text-center">
                  <Card.Avatar size="lg" border="sky" initials="CG" />
                  <Card.Header>
                    <Card.Title>Corentin G.</Card.Title>
                    <Card.Description>border="sky"</Card.Description>
                  </Card.Header>
                </div>
              </Card.Root>
            </div>
          </div>

          {/* Card.Avatar with initials */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Card.Avatar with Initials Fallback</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card.Root>
                <Card.Header>
                  <div className="flex items-center gap-3">
                    <Card.Avatar initials="JD" size="sm" />
                    <div>
                      <Card.Title as="p">John Doe</Card.Title>
                      <Card.Description>Initials when no image</Card.Description>
                    </div>
                  </div>
                </Card.Header>
              </Card.Root>
              <Card.Root>
                <Card.Header>
                  <div className="flex items-center gap-3">
                    <Card.Avatar initials="AB" size="md" border="light" />
                    <div>
                      <Card.Title as="p">Alice Brown</Card.Title>
                      <Card.Description>With light border</Card.Description>
                    </div>
                  </div>
                </Card.Header>
              </Card.Root>
              <Card.Root>
                <Card.Header>
                  <div className="flex items-center gap-3">
                    <Card.Avatar initials="XY" size="lg" border="dark" />
                    <div>
                      <Card.Title as="p">Xavier York</Card.Title>
                      <Card.Description>Large with dark border</Card.Description>
                    </div>
                  </div>
                </Card.Header>
              </Card.Root>
            </div>
          </div>

          {/* Complete Card Example */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-ocobo-dark mb-4">Complete Card Composition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card.Root variant="outlined" colorPalette="mint">
                <Card.Header>
                  <Card.Title>Feature Card</Card.Title>
                  <Card.Description>A complete card with all primitives</Card.Description>
                </Card.Header>
                <Card.Body>
                  <p className="text-sm text-ocobo-gray-600">
                    This card demonstrates the full composition system with Header, Title, 
                    Description, Body, and Footer working together.
                  </p>
                </Card.Body>
                <Card.Footer>
                  <span className="text-sm text-ocobo-mint">Learn more →</span>
                </Card.Footer>
              </Card.Root>
              <Card.Root variant="elevated" className="relative">
                <Card.Badge position="top-right">
                  <Badge colorPalette="coral">Hot</Badge>
                </Card.Badge>
                <Card.Media src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop" alt="Team" bleed />
                <Card.Header>
                  <div className="flex items-center gap-3">
                    <Card.Avatar initials="OC" size="sm" />
                    <div>
                      <Card.Title as="p">Full Composition</Card.Title>
                      <Card.Description>Media + Badge + Avatar</Card.Description>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p className="text-sm text-ocobo-gray-600">
                    This card showcases all Card primitives working together.
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Button size="sm">Action</Button>
                </Card.Footer>
              </Card.Root>
            </div>
          </div>
        </section>

        {/* Placeholder for future components */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ocobo-dark mb-6">Coming Soon</h2>
          <div className="bg-white rounded-lg p-6 text-ocobo-gray-500">
            <ul className="list-disc list-inside space-y-2">
              <li>Card composition complete (Media, Avatar, Badge added)</li>
              <li>Section components</li>
            </ul>
          </div>
        </section>

      </Container>
    </div>
  )
}
