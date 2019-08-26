import { Layout, Page, EmptyState } from '@shopify/polaris'
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react'
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'

export default class Index extends React.Component {
    state = { open: false }

    handleSelection = resources => {
        const idsFromResources = resources.selection.map(product => product.id)
        this.setState({ open: false })
        console.log(resources)
    }

    render () {
        return (
            <Page>
                <TitleBar
                    primaryAction={{
                        content: 'Select products',
                        onAction: () => this.setState({ open: true }),
                    }}
                />
                <ResourcePicker
                    resourceType="Product"
                    showVariants={false}
                    open={this.state.open}
                    onSelection={resources => this.handleSelection(resources)}
                    onChancel={() => this.setState({ open: false })}
                />
                <Layout>
                    <EmptyState
                        heading="Add new products to your store!"
                        action={{
                            content: 'Add products',
                            onAction: () => {
                                this.setState({ open: true })
                            }
                        }}
                        image={img}
                    >
                        <p>Select the products that you want to add to your lovely store</p>
                    </EmptyState>
                </Layout>
            </Page>
        )
    }
}
