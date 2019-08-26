import { Button, Form, FormLayout, Stack, TextField, Card, Layout, Page } from '@shopify/polaris'

export default class AnnotatedLayout extends React.Component {
    state = {
        discount: '10%'
    }

    handleSubmit = () => {
        this.setState({
            discount: this.state.discount
        })
        console.log('Submitted', this.state)
    }

    handleChange = field => {
        return value => this.setState({ [field]: value })
    }

    render () {
        const { discount } = this.state
        return (
            <Page>
                <Layout>
                    <Layout.AnnotatedSection
                        title="Default discounts"
                        description="Add a product to discount magically"
                    >
                        <Card sectioned>
                            <Form onSubmit={this.handleSubmit}>
                                <FormLayout>
                                    <TextField
                                        value={discount}
                                        onChange={this.handleChange('discount')}
                                        label="Discount percentage"
                                        type="discount"
                                    />
                                    <Stack distribution="trailing">
                                        <Button primary submit>
                                            Save
                                        </Button>
                                    </Stack>
                                </FormLayout>
                            </Form>
                        </Card>
                    </Layout.AnnotatedSection>
                </Layout>
            </Page>
        )
    }
}
