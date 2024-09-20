import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ImageGallery, ImageGalleryItem, ImageGalleryItems, ImageGalleryProps, ImageGalleryTitle } from './image-gallery';
import { ImageFullScreenContainer } from '../image-full-screen-container/image-full-screen-container';

const MyImageGallery = () => {
    const id = 'rnr-image-fs-container';

    return (
        <ImageGallery>
            <ImageGalleryTitle>Galeria de Imagens</ImageGalleryTitle>
            <ImageGalleryItems>
                <ImageGalleryItem
                    src="https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={''}
                    imageFullScreenContainerId={id}
                />
                <ImageGalleryItem
                    src="https://images.unsplash.com/photo-1720636440389-2429e032e39d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={''}
                    imageFullScreenContainerId={id}
                />
                <ImageGalleryItem
                    src="https://plus.unsplash.com/premium_photo-1726678139904-7f64a6416851?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={''}
                    imageFullScreenContainerId={id}
                />
            </ImageGalleryItems>
            <ImageFullScreenContainer id={id}/>
        </ImageGallery>
    );
};

const meta: Meta = {
    title: 'Components/Image Gallery',
    component: MyImageGallery,
    parameters: {
        controls: { expanded: true }
    }
};

export default meta;

const Template: StoryFn<ImageGalleryProps> = (args: any) => <MyImageGallery {...args} />;

export const Default = Template.bind({});