import classNames from 'classnames';

export const getPageWrapperStyles = () => ({
    wrapper: classNames(
        'xl:pl-[16rem] pt-[4rem] min-h-screen bg-gray-light relative',
    ),
    container: classNames(
        'p-4 pt-4 max-w-[1500px]',
    ),
});
