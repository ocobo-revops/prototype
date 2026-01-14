import { Container } from '../components/container'
import { Button } from '../components/button'
import { Badge } from '../components/badge'
import { Input } from '../components/input'

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

        {/* Placeholder for future components */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ocobo-dark mb-6">Coming Soon</h2>
          <div className="bg-white rounded-lg p-6 text-ocobo-gray-500">
            <ul className="list-disc list-inside space-y-2">
              <li>Card composition system</li>
              <li>Section components</li>
            </ul>
          </div>
        </section>

      </Container>
    </div>
  )
}
