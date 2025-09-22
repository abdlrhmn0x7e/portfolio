import { gql, type TypedDocumentNode } from "@apollo/client";
import { format } from "date-fns";
import { Skeleton } from "~/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { getClient } from "~/lib/apollo-client";
import { cn } from "~/lib/utils";

type UserContributionQuery = {
  viewer: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        weeks: {
          firstDay: string;
          contributionDays: {
            date: string;
            color: string;
            weekday: number;
            contributionCount: number;
          }[];
        }[];
      };
    };
  };
};

const USER_CONTRIBUTION_QUERY: TypedDocumentNode<
  UserContributionQuery,
  undefined
> = gql`
  {
    viewer {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            firstDay
            contributionDays {
              date
              contributionCount
              color
              weekday
            }
          }
        }
      }
    }
  }
`;

export async function GithubContributions() {
  const { data } = await getClient().query({
    query: USER_CONTRIBUTION_QUERY,
  });
  const monthsSet = new Set<string>();

  function getHeatColor(contributionCount: number) {
    if (contributionCount === 0) {
      return "var(--heat-0)";
    } else if (contributionCount > 25) {
      return "var(--heat-4)";
    } else if (contributionCount > 15) {
      return "var(--heat-3)";
    } else if (contributionCount > 7) {
      return "var(--heat-2)";
    } else if (contributionCount > 0) {
      return "var(--heat-1)";
    }
    return `var(--heat-${contributionCount})`;
  }

  return (
    <section className="grid grid-cols-1 gap-4 overflow-hidden md:grid-cols-4">
      <p>Recent Github Activity</p>

      <div className="col-span-3 flex w-full flex-col items-end gap-3 justify-self-end">
        <div className="align-self-end flex gap-1">
          {data?.viewer?.contributionsCollection?.contributionCalendar?.weeks
            .slice(15)
            .map((week) => {
              const month = format(new Date(week.firstDay), "MMM");

              function renderMonth() {
                if (monthsSet.has(month)) {
                  return <p className="mb-1 h-4 text-sm" />;
                }
                monthsSet.add(month);
                return <p className="mb-1 h-4 text-sm">{month}</p>;
              }

              return (
                <div
                  key={new Date(week.firstDay).getTime()}
                  className="flex w-3 flex-col gap-1"
                >
                  {renderMonth()}

                  {week.contributionDays.map((day) => (
                    <Tooltip
                      key={`${day.contributionCount}-${new Date(day.date).getTime()}`}
                    >
                      <TooltipTrigger asChild>
                        <div
                          style={{
                            backgroundColor: getHeatColor(
                              day.contributionCount,
                            ),
                            width: "12px",
                            height: "12px",
                            borderRadius: "2px",
                          }}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {day.contributionCount} contributions on{" "}
                          {format(new Date(day.date), "MMM d, yyyy")}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              );
            })}
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-1 sm:flex-row sm:items-start sm:justify-between">
          <p className="text-muted-foreground text-sm">
            {
              data?.viewer.contributionsCollection.contributionCalendar
                .totalContributions
            }{" "}
            contributions in the last year
          </p>

          <div className="flex gap-1">
            <p className="text-muted-foreground text-sm">Less</p>
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="size-4 rounded-sm"
                style={{ backgroundColor: `var(--heat-${index})` }}
              />
            ))}
            <p className="text-muted-foreground text-sm">More</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GithubContributionsSkeleton() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <p>Recent Github Activity</p>
      <div className="col-span-3 flex flex-col gap-3 justify-self-end overflow-hidden">
        <div className="flex gap-1">
          {Array.from({ length: 30 }).map((_, index) => (
            <div key={`week-${index}`} className="flex w-4 flex-col gap-1">
              <Skeleton
                className={cn(
                  "mb-2 h-2 w-8",
                  index % 4 !== 0 && "animate-none opacity-0",
                )}
              />
              {Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className="size-4 animate-pulse"
                  style={{
                    backgroundColor: `var(--heat-0)`,
                    borderRadius: "2px",
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-1 sm:flex-row">
          <p className="text-muted-foreground inline-flex items-center gap-1 text-sm">
            <Skeleton className="h-3 w-16" />
            contributions in the last year
          </p>
          <div className="flex gap-1">
            <p className="text-muted-foreground text-sm">Less</p>
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="size-4"
                style={{
                  backgroundColor: `var(--heat-${index})`,
                  borderRadius: "2px",
                }}
              />
            ))}
            <p className="text-muted-foreground text-sm">More</p>
          </div>
        </div>
      </div>
    </section>
  );
}
