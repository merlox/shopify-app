import { Layout, Page, TextStyle, EmptyState } from '@shopify/polaris'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'
const Index = () => (
    <Page>
        <Layout>
            <EmptyState
                heading="Add new products to your store!"
                action={{
                    content: 'Add products',
                    onAction: () => {
                        window.location = window.location.href + '/annotated-layout'
                    }
                }}
                image={img}
            >
                <p>Select the products that you want to add to your lovely store</p>
            </EmptyState>
        </Layout>
    </Page>
)

export default Index
