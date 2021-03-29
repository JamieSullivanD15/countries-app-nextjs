import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
};

const Meta = ({ title = 'Countries', description = 'Countries of the world' }: Props) => (
  <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta name='description' content={description} />
    <meta charSet='utf-8' />
    <title>{ title }</title>
  </Head>
)

export default Meta;
