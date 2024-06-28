import React, { FC, useMemo } from 'react';
import { Dialog as HeadlessDialog } from '@headlessui/react';
import { Button } from '../button/button';

export type DialogProps = {
    size: 'sm' | 'md' | 'lg' | 'xl' | 'full'
    isOpen: boolean
    onCloseDialog: (isOpen: boolean) => void
};

const sizesClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full'
};

export const Dialog: FC<DialogProps> = ({
    isOpen = false,
    size = 'md',
    onCloseDialog
}: DialogProps) => {
    const classes = useMemo(() => {
        return [sizesClasses[size]].join('');
    }, [size]);

    return (
        <HeadlessDialog
            open={isOpen}
            onClose={() => onCloseDialog(false)}
            className="relative z-50"
        >
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/60 backdrop-blur-lg">
                <HeadlessDialog.Panel className={`relative w-full ${classes} rounded-xl bg-white shadow p-4 overflow-hidden max-h-[80%]`}>
                    <HeadlessDialog.Title className="font-medium text-xl">Complete your order</HeadlessDialog.Title>
                    <div className="w-full overflow-y-scroll my-4 h-[calc(10%-1rem)]">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et risus sem. Pellentesque ut libero purus. Aliquam mattis rhoncus neque ac lacinia. Suspendisse pellentesque urna ex, non rhoncus arcu ornare ut. Donec id euismod turpis, non vehicula libero. Quisque porttitor interdum ligula in rutrum. Nullam eget nisi id urna pellentesque porttitor. Suspendisse vehicula dui non sapien consectetur accumsan.

                            Nulla ante ante, pulvinar a hendrerit eu, tincidunt ut est. Curabitur a convallis mi. Proin posuere eros in eros lacinia, vitae tincidunt dolor interdum. Cras sagittis dictum hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat lobortis iaculis. Nulla ullamcorper placerat lectus, ac posuere mi tincidunt eu. Nullam luctus commodo sem, eu tempor felis lacinia vitae. Fusce tempus diam a tellus faucibus gravida. Nam quis sapien ac quam molestie interdum non quis est. Phasellus vehicula, arcu nec eleifend pharetra, lacus risus dignissim elit, a porttitor justo purus eu enim. Quisque rutrum nisi quis imperdiet scelerisque. Suspendisse potenti. Integer eget sem sagittis, eleifend enim eu, congue tellus. Nulla feugiat commodo sem ac auctor.

                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent mattis dapibus porta. Suspendisse tempor nisi non mauris commodo, non ultricies dolor vehicula. Fusce quis tellus sit amet urna vulputate tempor ultrices vitae orci. Sed dapibus a risus quis sodales. Integer pellentesque tortor eu hendrerit fringilla. Aliquam vel erat lorem. Pellentesque efficitur feugiat dui. Donec tristique neque in odio luctus tincidunt.

                            Phasellus viverra nec tortor at sagittis. Suspendisse egestas diam non posuere lobortis. Aliquam gravida dignissim gravida. Suspendisse efficitur leo enim, nec dignissim sapien hendrerit sit amet. Donec aliquam eu purus venenatis imperdiet. Praesent auctor, elit at ornare molestie, odio felis feugiat justo, et molestie nunc est et nisl. Aenean placerat porttitor ipsum et interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in massa viverra, venenatis lectus eu, tincidunt massa. Praesent tristique vitae urna id porta. Donec scelerisque varius turpis, in lobortis mi eleifend sit amet. Quisque volutpat gravida consectetur. Integer dignissim, risus quis tristique convallis, eros magna suscipit diam, vel sagittis arcu nibh vel metus. Nam auctor mollis metus, eu fermentum nisi venenatis tempor.

                            Praesent elementum orci ligula, vel lobortis felis tincidunt quis. Vivamus cursus malesuada lorem, sodales pulvinar velit rutrum quis. Ut tortor nulla, sodales et porttitor aliquam, porta in nisl. Cras non sem accumsan, porttitor sapien vitae, lobortis urna. Suspendisse justo urna, ornare id enim porta, tincidunt porta erat. Proin nec ligula faucibus eros auctor fermentum eget sit amet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus bibendum velit lorem, vel ornare enim lacinia id. Vivamus eleifend neque porta diam maximus luctus. Maecenas consequat imperdiet rhoncus. Vivamus consectetur odio ac ex luctus, faucibus malesuada massa interdum. Ut id massa aliquet, tristique nunc id, bibendum lectus. Fusce efficitur, est a tempor finibus, lacus libero euismod magna, vel auctor orci est ac sapien.

                            Phasellus lacus mi, cursus non consectetur sed, finibus eu mauris. Nam cursus massa id mi interdum luctus. Nulla sapien est, porta eu tellus cursus, fermentum venenatis magna. Donec tellus dui, consequat consequat facilisis a, auctor sit amet tellus. Mauris et massa nisi. Quisque faucibus a ante ut dapibus. Sed rhoncus eget neque quis euismod. Phasellus non sem est. Praesent non quam vel ligula hendrerit aliquet at eu tellus. Nunc accumsan risus vitae leo fringilla bibendum. Sed sit amet ultrices velit. Quisque accumsan egestas turpis id iaculis. Mauris sed tempor orci, ac commodo nisl. Sed imperdiet tincidunt sem, vel venenatis nisi tristique sed. Nunc dignissim, ipsum id scelerisque suscipit, ante mauris ullamcorper orci, sed mattis tortor augue sit amet sapien. Fusce molestie consequat tempor.

                            Curabitur elementum faucibus purus vitae consectetur. Maecenas dapibus, magna nec interdum molestie, urna diam semper mi, in scelerisque leo erat eget ligula. Mauris aliquet gravida iaculis. Quisque accumsan non massa in fringilla. Phasellus accumsan maximus augue. Nulla eu lacus eu velit ullamcorper tempor. Donec facilisis tortor eget elit vehicula, posuere rhoncus diam elementum. Curabitur tincidunt orci sit amet auctor imperdiet. Phasellus egestas nibh ut vestibulum venenatis. Vestibulum porttitor tempus feugiat. Cras placerat leo a leo laoreet aliquet. Morbi scelerisque eros et odio blandit auctor. Suspendisse maximus dui a enim feugiat feugiat. Nam nec nulla aliquet, cursus ex sed, sollicitudin neque.

                            Quisque ornare magna vel feugiat volutpat. Nam ac lacus gravida, sollicitudin velit rhoncus, dignissim quam. Phasellus vel nibh tincidunt, laoreet magna at, bibendum felis. Nullam posuere porta sagittis. Nunc rutrum elementum erat, ut lobortis ligula varius eu. Vivamus commodo quis ligula ut maximus. Suspendisse ut convallis metus. Maecenas eget feugiat elit. Cras tortor lorem, commodo ac risus non, tempor consequat odio. Proin a ligula eget elit maximus viverra eu quis purus. Phasellus hendrerit lorem eget sem luctus vestibulum vel vitae nulla.

                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent egestas, nulla ac facilisis sodales, ex ipsum faucibus massa, at egestas justo mauris et est. Sed convallis ex a ante fermentum consequat. Donec pulvinar orci nisi, sed aliquam libero aliquam id. Sed tristique orci non nisl venenatis aliquam. Sed feugiat finibus leo ut molestie. In hac habitasse platea dictumst. Aliquam metus nunc, ornare sit amet massa quis, vestibulum hendrerit magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                            Nam vel mattis felis, nec blandit neque. Maecenas placerat auctor quam, sed tincidunt diam cursus eu. Praesent quis porta erat. Morbi pharetra ac orci blandit lacinia. Mauris tempor nibh orci, sed sagittis lorem lobortis vel. Phasellus porttitor massa nec tempor rutrum. Sed a tellus ac ex faucibus vulputate. Nulla faucibus nunc quis accumsan ornare. Quisque id euismod mauris. Aliquam quis lectus nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                    </div>
                    <div className="w-full flex justify-end items-center space-x-4">
                        <Button label={'Cancel'} />
                        <Button emphasis="high" label={'Confirm'} />
                    </div>
                </HeadlessDialog.Panel>
            </div>
        </HeadlessDialog>
    );
};