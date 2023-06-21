import { TitleComponent } from "./Title";
import { TextComponent } from "./Text";
import { ListComponent } from "./List";
import { LinkComponent } from "./Link";



export default function LoadingComponent ( { show }: { show: boolean; } )
{


    // eslint-disable-next-line no-constant-condition
    if ( show )
    {

        return (
            <>
                <TitleComponent />
                <TextComponent />
                <ListComponent />
                <LinkComponent openInNewTab={ "_blank" } />

            </> );
    } else
    {
        return "Loading...";
    }

}